// import Vue from 'vue'
// export function cutString (str, len) {
//   console.log(str)
//   if (str !== null) {
//     if (str.length * 2 <= len) {
//       return str
//     }
//     let md = new MarkdownIt()
//     str = md.render(str)
//     str = str.replace(/<.*?>/g, '').replace(/&lt;.*?/g, '<').replace(/&gt;.*?/g, '>')
//     let strlen = 0
//     let s = ''
//     for (let i = 0; i < str.length; i++) {
//       s = s + str.charAt(i)
//       if (str.charCodeAt(i) > 128) {
//         strlen = strlen + 2
//         if (strlen >= len) {
//           return s.substring(0, s.length - 1) + '...'
//         }
//       } else {
//         strlen = strlen + 1
//         if (strlen >= len) {
//           return s.substring(0, s.length - 2) + '...'
//         }
//       }
//     }
//     return s
//   }
// }


// const filters = {cutString }

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })
// export default filters