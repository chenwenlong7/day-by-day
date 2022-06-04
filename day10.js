/**
 * // 计算对象的层数
  // Done~~~
  const obj = {
    a: 'a',
    b: {
      c: {
        d: 'd',
        e: 'e',
      }
    },
    f: {
      g: {
        h: {
          i: 'i',
        }
      },
    }
  };
 */

  function getLevel(obj = {}) {
    let result = 1;
    const dfs = (param, level = 0) => {
      if(typeof param === 'object' && param !== null) {
        Object.values(param).forEach(item => {
          if(typeof item === 'object' && item !== null) {
            dfs(item, level+1);
          }else {
            result = level + 1 > result? level + 1: result;
          }
        })
      }else {
        result = level > result? level: result;
      }
    }
    dfs(obj);
    return result
  }
  const obj = {
    a: 'a',
    b: {
      c: {
        d: 'd',
        e: 'e',
      }
    },
    f: {
      g: {
        h: {
          i: 'i',
        }
      },
    }
  };