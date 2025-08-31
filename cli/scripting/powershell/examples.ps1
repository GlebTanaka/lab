# Simple PowerShell examples
param(
  [string]$Name = "World"
)

Write-Output "Hello, $Name!"

# Arrays and loops
$colors = @('red','green','blue')
foreach ($c in $colors) {
  Write-Output "Color: $c"
}

# Functions
function Say-Hi {
  param([string]$To)
  Write-Output "Hi, $To"
}

Say-Hi -To 'PowerShell'

# Pipeline example
"one","two","three" | % { $_ } | Select-Object @{n='Line';e={$_}} | Format-Table -AutoSize
