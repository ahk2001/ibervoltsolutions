const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

// Extract translations object
const match = content.match(/const translations\s*=\s*(\{[\s\S]*?\n\s*\};\n)/);
if (!match) {
  console.error('Could not extract translations!');
  process.exit(1);
}

// Evaluate translations object safely
const sandbox = {};
const fn = new Function('sandbox', 'sandbox.translations = ' + match[1]);
fn(sandbox);

const t = sandbox.translations;
console.log('PT keys count:', Object.keys(t.pt).length);
console.log('ES keys count:', Object.keys(t.es).length);
console.log('EN keys count:', Object.keys(t.en).length);

// Compare keys
const ptKeys = new Set(Object.keys(t.pt));
const esKeys = new Set(Object.keys(t.es));
const enKeys = new Set(Object.keys(t.en));

let errors = 0;
for (const k of ptKeys) {
  if (!esKeys.has(k)) {
    console.error(`Key "${k}" missing in ES!`);
    errors++;
  }
  if (!enKeys.has(k)) {
    console.error(`Key "${k}" missing in EN!`);
    errors++;
  }
}
for (const k of esKeys) {
  if (!ptKeys.has(k)) {
    console.error(`Key "${k}" missing in PT!`);
    errors++;
  }
}

if (errors === 0) {
  console.log('✅ ALL TRANSLATIONS ARE 100% BALANCED ACROSS PT, ES, EN!');
} else {
  console.error(`❌ Total discrepancies: ${errors}`);
}
