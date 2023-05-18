## Cài đặt
### Yêu cầu
- Cài đặt [NodeJS](https://nodejs.org/en) >= 10.16 và [npm](https://www.npmjs.com/) >= 5.6
- [Git](https://git-scm.com/) cài đặt git trong máy.
- [Truffle](https://www.trufflesuite.com/truffle), cài đặt truffle global với câu lệnh `npm install -g truffle`
- [Metamask](https://metamask.io) add extension metamask trong trình duyệt.
- [Ganache](https://trufflesuite.com/ganache/) cài đặt ganache localhost.

### Các bước cài đặt môi trường

**Bước 1:** tải source code về máy tình và cd vào thư mục vừa tải về.
```bash
git clone https://github.com/Zoo1sondv/blockchain.git
cd blockchain
```

**Bước 2:** mở file setup.docx và cài đặt các phần mềm liên quan theo file.

**Bước 3:** Cài đặt truffle cho project
-- di chuyển đến thư mục Smart-Contract
```
cd src/Smart-Contract
```
-- Cài đặt truffle global
```
npm install -g truffle
```
-- Biên dịch các Smart Contract
```
truffle compile
```
-- Triển khai Smart Contract trên ganache localhost
```
truffle migrate --reset
```
-- có thể chạy test thử: không bắt buộc phải chạy cmd này.
```
truffle test
```

### Setting up Client Application
**Bước 4:** Cài đặt cho client
-- Cài đặt các gói cần thiết cho project
```
npm install
```
-- Chạy client local
```
npm start
```