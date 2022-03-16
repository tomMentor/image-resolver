###
 # @Author: tiw
 # @LastEditors: Please set LastEditors
 # @Description:  自动化部署脚本
### 

# 执行过程不为 true 自动退出
set -e

# 当前系统时间
CURRENT_TIME=$(date "+%Y-%m-%d %H:%M:%S")

read -p "Please enter Commit Info? [ Default $CURRENT_TIME ]: "
git add .
git commit -m  "[ $CURRENT_TIME ] "
git push