---
sidebar_position: 2
---

# S3 Bucket

Scripts and tips for securing S3 Buckets

### Checking for public access

SETUP

```bash
# require python 3.7+
pip install boto3
python3 s3-bucket.py https://web-faventia.s3-eu-west-1.amazonaws.com
touch hacked.txt # just create file for upload test
```

SCRIPT

```python
import boto3
from botocore import UNSIGNED
from botocore.client import Config
import sys
import os

BUCKET_URL = sys.argv[1]
BUCKET_NAME = BUCKET_URL.split("//")[1].split(".")[0]

print(f"Checking bucket {BUCKET_NAME} ({BUCKET_URL})")

s3 = boto3.resource('s3', config=Config(signature_version=UNSIGNED))
s3_client = boto3.client('s3', config=Config(signature_version=UNSIGNED))
bucket = s3.Bucket(BUCKET_NAME)


def get_info():
    try:
        bucket_acl = s3_client.get_bucket_acl(Bucket=BUCKET_NAME)
        print(f'[*] Bucket ACL: {bucket_acl}')
    except Exception as err:
        print(f'[-] Error get_info: {err}')


def check_for_public_read():
    try:
        is_public_for_read = False
        for obj in bucket.objects.all():
            print(f'[+] Bucket has files (ex: {obj.key})')
            is_public_for_read = True
            break
            
        if is_public_for_read:
            print("[+] Bucket has public listing")
        else:
            print("[-] Bucket as no public listing")
    except Exception as err:
        print("[-] Bucket as no public listing")
        print(f"[-] Error: {err}")


def check_for_public_write():
    hack_file_path = f"{os.path.dirname(os.path.abspath(__file__))}/hacked.txt"
    with open(hack_file_path, "rb") as f:
        try:
            hack_object_name = "b424fa4f-95d3-4375-bf91-b78e4173b0f1.txt"
            s3_client.upload_fileobj(f, BUCKET_NAME, hack_object_name)
            print('[+] Bucket is public for write')
            print(f'[+] File {hack_object_name} uploaded: {BUCKET_URL}/{hack_object_name}')
        except Exception as err:
            print('[-] Bucket is not public for write')
            print(f'[-] Error: {err}')

get_info()
check_for_public_read()
check_for_public_write()
```

Sample Output

```
Checking bucket web-faventia (https://web-faventia.s3-eu-west-1.amazonaws.com)
[*] Bucket ACL: {'ResponseMetadata': {'RequestId': 'AENWYCP0N4ZWB56C', 'HostId': 'FA2tehnugxbx7w+OqudMO/m9foSKW+ch/H8SfzBq9AGL6mcSKZQ58fVKjyj5qYqIS0J0i/aIqLE=', 'HTTPStatusCode': 200, 'HTTPHeaders': {'x-amz-id-2': 'FA2tehnugxbx7w+OqudMO/m9foSKW+ch/H8SfzBq9AGL6mcSKZQ58fVKjyj5qYqIS0J0i/aIqLE=', 'x-amz-request-id': 'AENWYCP0N4ZWB56C', 'date': 'Mon, 08 Nov 2021 18:00:49 GMT', 'content-type': 'application/xml', 'transfer-encoding': 'chunked', 'server': 'AmazonS3'}, 'RetryAttempts': 0}, 'Owner': {'DisplayName': 'gaddpipe', 'ID': '93c55c0240f4fc023c5635c69f8c48026940490f398ada43dd932492b8e6a94d'}, 'Grants': [{'Grantee': {'Type': 'Group', 'URI': 'http://acs.amazonaws.com/groups/global/AllUsers'}, 'Permission': 'FULL_CONTROL'}]}
[+] Bucket has files (ex: 208b605c01bc1fd2b9ad92a96f77a169a84643cdeb82a9e64204e23f501afa17371012ec4c2928fda5477f19eaecf9ff449e2accaef00c2d842bf9654e48a232.txt)
[+] Bucket has public listing
[+] Bucket is public for write
[+] File b424fa4f-95d3-4375-bf91-b78e4173b0f1.txt uploaded: https://web-faventia.s3-eu-west-1.amazonaws.com/b424fa4f-95d3-4375-bf91-b78e4173b0f1.txt
```