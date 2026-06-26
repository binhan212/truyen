#!/usr/bin/env pwsh
param()

$filesDir = Join-Path $PSScriptRoot ".." "files"
if (-not (Test-Path $filesDir -PathType Container)) {
    Write-Error "Không tìm thấy thư mục assets/files/"
    exit 1
}

$txtFiles = Get-ChildItem -Path $filesDir -Filter "*.txt" | Sort-Object Name | ForEach-Object { $_.Name }

$json = ConvertTo-Json -InputObject @($txtFiles) -Compress
$outPath = Join-Path $filesDir "chapters.json"
Set-Content -Path $outPath -Value $json -Encoding UTF8

Write-Host "Đã cập nhật chapters.json với $($txtFiles.Count) chương:"
foreach ($f in $txtFiles) { Write-Host "  - $f" }
