// 修改响应内容以解锁会员功能
let body = JSON.parse($response.body);

// 伪造一个成功的内购验证响应
body = {
  "status": "success",
  "membership": {
    "status": "active",
    "expires": "2099-12-31"
  }
};

$done({body: JSON.stringify(body)});
