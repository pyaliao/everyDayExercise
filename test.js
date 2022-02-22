const delSpace = function (str, pos = 'all') {
  if (!str) {
    return str
  }
  const patterns = {
    all: {
      pt: /\s/g
    },
    left: {
      pt: /^\s+/g
    },
    right: {
      pt: /\s+$/g
    },
    center: {
      // 中间匹配正则不对
      pt: /(\S+)(\s+)(\S+)/g,
      grp: '$1$3'
    },
    both: {
      pt: /(^\s+)|(\s+$)/g
    }
  }
  return str.replace(patterns[pos].pt, patterns[pos].grp ? patterns[pos].grp : '')
}
// console.log('---', delSpace(' s f f f f f  ', 'center'), '----')
console.log('---', delSpace(' s f f f f f  ', 'left'), '----')
