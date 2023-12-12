const express = require('express')
const app = express()
const port = 8080

app.use(express.json());
app.post('/api/', (req, res) => {
    let error = req.body.error;
    if (error != 0) {
        //Không làm gì cả.
        return;
    }
    
    //mảng chứa danh sách các giao dịch
    let transactions = req.body.data;
    
    console.log(`Received ${transactions.length} transactions`);
  //thêm code xử lý giao dịch ở đây.
    for (let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];
      console.log(`Transaction ${i + 1}:`);
      console.log(transaction);
}
    
    //thêm code xử lý giao dịch ở đây.
    
    res.end("OK");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
