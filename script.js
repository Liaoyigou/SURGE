// script.js 文件内容，修改响应数据以解锁会员功能

let body = JSON.parse($response.body);

// 打印原始响应内容，供调试使用
console.log("Original response body:", JSON.stringify(body, null, 2));

// 修改响应内容以解锁会员功能
body = {
  "status": "success",
  "subscriber": {
    "subscriptions": {
      "ipcams_pro_plus_yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-31T23:59:59Z",
        "is_sandbox": false,
        "original_purchase_date": "2023-07-07T00:00:00Z",
        "period_type": "normal",
        "purchase_date": "2023-07-07T00:00:00Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    },
    "entitlements": {
      "pro_plus": {
        "expires_date": "2099-12-31T23:59:59Z",
        "product_identifier": "ipcams_pro_plus_yearly",
        "purchase_date": "2023-07-07T00:00:00Z"
      }
    }
  }
};

// 打印修改后的响应内容，供调试使用
console.log("Modified response body:", JSON.stringify(body, null, 2));

// 返回修改后的响应
$done({body: JSON.stringify(body)});
