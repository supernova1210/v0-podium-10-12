// Variantes 640 / 1080 px des photos WebP, lues par lib/image-loader.ts.
// Usage : npm i --no-save sharp && node scripts/image-variants.js public lib/image-variants.json
const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

const [publicDir, manifestOut] = process.argv.slice(2)
const imagesDir = path.join(publicDir, "images")
const TARGETS = [640, 1080]
const VARIANT_RE = /-\d+w\.webp$/

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    return e.isDirectory() ? walk(p) : [p]
  })
}

;(async () => {
  const manifest = {}
  let before = 0
  let added = 0
  for (const file of walk(imagesDir).sort()) {
    if (!file.endsWith(".webp") || VARIANT_RE.test(file)) continue
    const { width } = await sharp(file).metadata()
    const widths = []
    for (const t of TARGETS) {
      if (width <= t * 1.15) continue
      const out = file.replace(/\.webp$/, `-${t}w.webp`)
      await sharp(file).resize({ width: t }).webp({ quality: 78 }).toFile(out)
      added += fs.statSync(out).size
      widths.push(t)
    }
    if (widths.length) {
      const key = ("/" + path.relative(publicDir, file).split(path.sep).join("/")).normalize("NFC")
      manifest[key] = widths
      before += fs.statSync(file).size
    }
  }
  fs.writeFileSync(manifestOut, JSON.stringify(manifest) + "\n")
  console.log(`${Object.keys(manifest).length} images, originaux ${(before / 1e6).toFixed(1)} Mo, variantes ajoutees ${(added / 1e6).toFixed(1)} Mo`)
})()
