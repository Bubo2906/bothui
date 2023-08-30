const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Chọn một cổng bạn muốn sử dụng

// Dùng middleware để phục vụ các tệp tĩnh trong thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Định tuyến đến trang chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lắng nghe cổng
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
