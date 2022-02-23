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
      // x(?!y)的意思是当x后面不是空格或者字符串结尾时
      // 这个模式排除了字符串结尾的空格被匹配
      pt: /(\S+)(\s+)(?!$|\s)/g,
      grp: '$1'
    },
    both: {
      pt: /(^\s+)|(\s+$)/g
    }
  }
  return str.replace(patterns[pos].pt, patterns[pos].grp ? patterns[pos].grp : '')
}
console.log('---', delSpace(' s f     f    f f f  ', 'center'), '----')
// console.log('---', delSpace(' s f f f f f  ', 'left'), '----')
