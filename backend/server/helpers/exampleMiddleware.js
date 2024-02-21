export const myMiddleware = (req, _res, next) => {

  console.log('Req path:', req.path)
  console.log('Req method:', req.method)

  next()

}