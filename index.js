const express = require('express');
const app = express()
const PORT = 8080;


app.use(express.json());

const products = [
  {
    name : 'อยากเริ่มต้นใหม่กับคนเดิม',
    image : 'https://soranatch4.com/demo-ink/assets/img/ink-0002.jpeg',
    brand : 'Box music'
  },
    {
    name : 'สายตาหลอกกันไม่ได้',
    image : 'https://soranatch4.com/demo-ink/assets/img/ink-0001.jpeg',
    brand : 'Box music'
  },
   {
    name : 'เหนื่อยใจ',
    image : 'https://soranatch4.com/demo-ink/assets/img/ink-0004.jpeg',
    brand : 'Box music'
  }
]

app.get('/products' , (req , res) => {

  res.status(200).json(products);

})

app.listen(PORT , ()=> console.log('server is runing'))
