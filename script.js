// script.js 文件内容，修改响应数据以解锁会员功能

let body = JSON.parse($response.body);

// 打印原始响应内容，供调试使用
console.log("Original response body:", JSON.stringify(body, null, 2));

// 修改响应内容以解锁会员功能
body = {
  "status": "success",
  "membership": {
    "status": "active",
    "expires": "2099-12-31"
  }
};

// 打印修改后的响应内容，供调试使用
console.log("Modified response body:", JSON.stringify(body, null, 2));

// 返回修改后的响应
$done({body: JSON.stringify(body)});
