# setup.ps1
# This script runs all .js files in the current folder in order.

Write-Host "`nRunning ECMAScript examples..." -ForegroundColor Green

Get-ChildItem -Filter *.js | Sort-Object Name | ForEach-Object {
    Write-Host "`n---- Running $($_.Name) ----" -ForegroundColor Cyan
    node $_.FullName
}

