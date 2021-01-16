export function bundleSize() {
  return {
    name: 'bundle-size',
    generateBundle(_, bundle) {
      const files = Object.keys(bundle);
      for (const file of files) {
        const fileSize = Buffer.byteLength(bundle[file].code, 'utf8');
        console.log(`${file} ≈ ${prettyPrintFileSize(fileSize)}`);
      }
    },
  };
}

function prettyPrintFileSize(size) {
  const i = size ? Math.floor(Math.log(size) / Math.log(1024)) : 0;
  const units = ['B', 'kB', 'MB', 'GB', 'TB'];
  return `${+(size / Math.pow(1024, i).toFixed(2))} ${units[i]}`;
}
