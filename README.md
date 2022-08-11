# test-react
Next.jsでのお試しプロジェクト  
api側としてはgraphqlでサーバを立てておき、そこに対して通信してデータを取得するもの  

# usage
## server
```
cd api
go mod tidy
go run server.go
```

## client
```
cd ui/app
npm i
npm run dev
```
起動したら  
[http://localhost:3000/login](http://localhost:3000/login)  
にアクセスする
