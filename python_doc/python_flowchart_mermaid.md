# Python 程式設計與邏輯思維
## 使用 Mermaid 繪製程式流程圖
- **授課教師：** [Y.H Wen/PhD of NTU Physics]
- **適用對象：** 高中資訊科技課程 (中等程度)
- 採用了**「先看流程圖，下一張看程式碼」**的編排方式
- 與 Python 程式碼整合，緊跟在對應的流程圖之後。
---

# 課程大綱 (Agenda)

1. 什麼是流程圖與 Mermaid？
2. Mermaid 流程圖基礎語法介紹
3. 日常生活邏輯範例 (3個)
4. 基礎數學與判斷範例 (含 Python 實作)
5. 經典演算法範例 (含 Python 實作)
6. 生活化串列與進階範例 (5個)
7. 總結與 Q&A

---

# 1. 什麼是流程圖與 Mermaid？

- **流程圖 (Flowchart)**：用圖形來表示演算法或工作流程，幫助我們在寫程式前釐清邏輯。
- **Mermaid**：一種基於 JavaScript 的圖表繪製工具，讓我們可以用「純文字」來產生流程圖。
- **優點**：不需要手動拉圖形、排版，只要專注於邏輯與文字描述，支援 Markdown，非常適合程式設計師！
- Mermaid線上編輯器: https://www.processon.io/zh-tw/mermaid
- 互動式 Mermaid 流程圖教學 https://www.csie.ntu.edu.tw/~d95015/mermaid.html

---

# 2. Mermaid 基礎語法：方向與節點

使用 `graph` 或 `flowchart` 宣告，並指定方向：
- `TD` 或 `TB`：由上到下 (Top to Down)
- `LR`：由左到右 (Left to Right)

```mermaid
graph TD
    A[一般矩形節點]
    B((圓形節點 - 通常用於開始/結束))
    C{菱形節點 - 用於判斷式}
    D[(圓柱體 - 資料庫)]

    A --> B
```

---

# 2. Mermaid 基礎語法：線條與文字

可以透過不同的箭頭連接節點，並在線上加上文字說明。

```mermaid
graph LR
    A[節點 A] --> B[節點 B]
    C[節點 C] --- D[無箭頭線條]
    E[節點 E] -->|條件成立| F[節點 F]
    G[節點 G] -.->|虛線| H[節點 H]
```

---

# 2. Mermaid 基礎語法：判斷與迴圈結構

在程式設計中，最常使用**菱形**來表示 `if/else` 判斷或 `while/for` 迴圈的條件。

```mermaid
graph TD
    Start((開始)) --> Cond{條件判斷}
    Cond -->|True| Action1[執行動作 1]
    Cond -->|False| Action2[執行動作 2]
    Action1 --> Loop{是否繼續?}
    Loop -->|Yes| Cond
    Loop -->|No| End((結束))
    Action2 --> End
```

---

# 範例 1：日常生活 - 早上起床上學
**包含判斷與迴圈**

```mermaid
graph TD
    Start((鬧鐘響起)) --> CheckTime{時間到了嗎?}
    CheckTime -->|還沒, 賴床| Snooze[按下貪睡按鈕]
    Snooze --> Wait[等待 5 分鐘]
    Wait --> Start
    CheckTime -->|到了| GetUp[起床刷牙洗臉]
    GetUp --> Weather{今天下雨嗎?}
    Weather -->|Yes| Umbrella[帶傘出門]
    Weather -->|No| Go[直接出門]
    Umbrella --> End((抵達學校))
    Go --> End
```

---

# 範例 2：日常生活 - 自動販賣機買飲料
**包含判斷與迴圈**

```mermaid
graph TD
    Start((想喝飲料)) --> Choose[選擇飲料]
    Choose --> CheckStock{有庫存嗎?}
    CheckStock -->|No| Choose
    CheckStock -->|Yes| InsertCoin[投入硬幣]
    InsertCoin --> CheckAmount{金額足夠嗎?}
    CheckAmount -->|No| InsertCoin
    CheckAmount -->|Yes| Dispense[掉出飲料與找零]
    Dispense --> End((拿到飲料))
```

---

# 範例 3：日常生活 - 準備段考
**包含判斷與迴圈**

```mermaid
graph TD
    Start((開始讀書)) --> Read[閱讀一個章節]
    Read --> Practice[寫練習題]
    Practice --> Check{全部答對嗎?}
    Check -->|No| Review[複習錯誤觀念]
    Review --> Practice
    Check -->|Yes| Next{還有剩餘章節嗎?}
    Next -->|Yes| Read
    Next -->|No| End((準備完成, 睡覺))
```

---

# 範例 4：基礎數學 - 計算 1+2+...+100
**使用迴圈累加 (流程圖)**

```mermaid
graph TD
    Start((開始)) --> Init[total_sum = 0, i = 1]
    Init --> Cond{i <= 100?}
    Cond -->|Yes| Add[total_sum = total_sum + i]
    Add --> Inc[i = i + 1]
    Inc --> Cond
    Cond -->|No| Print[輸出 total_sum]
    Print --> End((結束))
```

---

# 範例 4：基礎數學 - 計算 1+2+...+100
**Python 程式碼實作**

```python
# 1. 初始化變數
total_sum = 0
i = 1

# 2. 條件判斷與迴圈
while i <= 100:
    # 條件成立 (Yes) 時執行的動作
    total_sum = total_sum + i  # 累加目前的數字
    i = i + 1                  # 數字加 1，準備下一次迴圈

# 3. 條件不成立 (No) 時，離開迴圈並輸出結果
print("1 加到 100 的總和為:", total_sum)
```

---

# 範例 5：基礎數學 - 判斷奇偶數 (Odd or Even)
**使用條件判斷與 Modulo (%)**

```mermaid
graph TD
    Start((開始)) --> Input[輸入整數 N]
    Input --> Cond{N % 2 == 0?}
    Cond -->|Yes| Even[輸出: 偶數 Even]
    Cond -->|No| Odd[輸出: 奇數 Odd]
    Even --> End((結束))
    Odd --> End
```

---

# 範例 6：基礎數學 - 成績等第判斷
**多重條件判斷 (if-elif-else)**

```mermaid
graph TD
    Start((開始)) --> Input[輸入成績 score]
    Input --> CondA{score >= 90?}
    CondA -->|Yes| GradeA[輸出 A]
    CondA -->|No| CondB{score >= 80?}
    CondB -->|Yes| GradeB[輸出 B]
    CondB -->|No| CondC{score >= 60?}
    CondC -->|Yes| GradeC[輸出 C]
    CondC -->|No| GradeF[輸出 F]
    GradeA --> End((結束))
    GradeB --> End
    GradeC --> End
    GradeF --> End
```

---

# 概念補充：什麼是「輾轉相除法」？
**用來尋找兩個數字的最大公因數 (GCD)**

- **核心邏輯**：大數除以小數，取「餘數」。接著用原本的「小數」再除以剛剛的「餘數」，不斷重複，直到**餘數為 0**，此時的除數就是 GCD。
- **實際推演：找 48 與 18 的 GCD**
  1. 48 ÷ 18 = 2 ... **餘 12**  (a=48, b=18, 餘數=12)
  2. 18 ÷ 12 = 1 ... **餘 6**   (a=18, b=12, 餘數=6)
  3. 12 ÷ 6 = 2 ... **餘 0**    (a=12, b=6, 餘數=0)
  4. **餘數為 0，結束！最大公因數為 6。**

---

# 範例 7：經典演算法 - 最大公因數 (GCD)
**輾轉相除法 (Euclidean Algorithm) 流程圖**

```mermaid
graph TD
    Start((開始)) --> Input[輸入兩數 a, b]
    Input --> Cond{b == 0?}
    Cond -->|No| Calc[計算餘數: r = a % b]
    Calc --> Swap1[將 b 的值給 a <br> a = b]
    Swap1 --> Swap2[將餘數 r 的值給 b <br> b = r]
    Swap2 --> Cond
    Cond -->|Yes| Print[輸出 a 為最大公因數 GCD]
    Print --> End((結束))
```

---

# 範例 7：經典演算法 - 最大公因數 (GCD)
**Python 程式碼實作**

```python
# 1. 取得使用者輸入
a = int(input("請輸入第一個數字 a: "))
b = int(input("請輸入第二個數字 b: "))

# 2. 輾轉相除法迴圈
while b != 0:
    r = a % b  # 計算餘數
    a = b      # 將 b 的值給 a
    b = r      # 將餘數給 b

# 3. 迴圈結束，輸出結果
print("最大公因數 (GCD) 為:", a)
```

---

# 範例 8：經典演算法 - 最小公倍數 (LCM)
**利用公式：兩數相乘 = GCD × LCM (流程圖)**

```mermaid
graph TD
    Start((開始)) --> Input["輸入兩數 a, b"]
    Input --> Save["備份原始值:
 x = a, y = b"]
    Save --> Cond{"b == 0?"}
    Cond -->|No| Calc["計算餘數: r = a % b"]
    Calc --> Swap1["a = b"]
    Swap1 --> Swap2["b = r"]
    Swap2 --> Cond
    Cond -->|Yes| GCD["取得最大公因數 GCD = a"]
    GCD --> LCM["計算 LCM = (x * y) / GCD"]
    LCM --> Print["輸出最小公倍數 LCM"]
    Print --> End((結束))

```

---

# 範例 8：經典演算法 - 最小公倍數 (LCM)
**Python 程式碼實作**

```python
a = int(input("請輸入第一個數字 a: "))
b = int(input("請輸入第二個數字 b: "))

# 備份原始數值，因為 a 和 b 在迴圈中會改變
x = a
y = b

# 輾轉相除法求 GCD
while b != 0:
    r = a % b
    a = b
    b = r
gcd = a

# 計算最小公倍數 (使用 // 確保結果為整數)
lcm = (x * y) // gcd
print(f"{x} 與 {y} 的最小公倍數為: {lcm}")
```

---

# 範例 9：經典演算法 - 質數判斷 (Prime Number)
**檢查是否有 1 和自己以外的因數**

```mermaid
graph TD
    Start((開始)) --> Input[輸入 N]
    Input --> Check1{N <= 1?}
    Check1 -->|Yes| NotPrime[不是質數]
    Check1 -->|No| Init[i = 2]
    Init --> LoopCond{i < N?}
    LoopCond -->|Yes| ModCheck{N % i == 0?}
    ModCheck -->|Yes| NotPrime
    ModCheck -->|No| Inc[i = i + 1]
    Inc --> LoopCond
    LoopCond -->|No| IsPrime[是質數]
    NotPrime --> End((結束))
    IsPrime --> End
```

---

# 範例 10：經典演算法 - 閏年判斷 (Leap Year)
**四年一閏，百年不閏，四百年再閏 (流程圖)**

```mermaid
graph TD
    Start((開始)) --> Input[輸入年份 Year]
    Input --> Cond400{Year % 400 == 0?}
    Cond400 -->|Yes| Leap[是閏年]
    Cond400 -->|No| Cond100{Year % 100 == 0?}
    Cond100 -->|Yes| NotLeap[不是閏年]
    Cond100 -->|No| Cond4{Year % 4 == 0?}
    Cond4 -->|Yes| Leap
    Cond4 -->|No| NotLeap
    Leap --> End((結束))
    NotLeap --> End
```

---

# 範例 10：經典演算法 - 閏年判斷 (Leap Year)
**Python 程式碼實作**

```python
# 1. 取得使用者輸入
year = int(input("請輸入要判斷的年份: "))

# 2. 依照流程圖的順序進行多重條件判斷
if year % 400 == 0:
    print(year, "是閏年 (四百年再閏)")

elif year % 100 == 0:
    print(year, "不是閏年 (百年不閏)")

elif year % 4 == 0:
    print(year, "是閏年 (四年一閏)")

else:
    print(year, "不是閏年")
```

---

# 範例 11：進階範例 - 猜數字遊戲
**結合迴圈與大小判斷**

```mermaid
graph TD
    Start((開始)) --> Answer[設定解答 Ans]
    Answer --> Input[玩家輸入猜測數字 Guess]
    Input --> Check{Guess == Ans?}
    Check -->|Yes| Win[輸出: 猜中了!]
    Check -->|No| Size{Guess > Ans?}
    Size -->|Yes| TooBig[輸出: 太大了]
    Size -->|No| TooSmall[輸出: 太小了]
    TooBig --> Input
    TooSmall --> Input
    Win --> End((結束))
```

---

# 範例 12：生活化串列 - 購物車結帳計算
**走訪串列累加金額，滿千打九折**

```mermaid
graph TD
    Start((開始)) --> Init[總金額 total = 0, 取得購物車清單 items]
    Init --> LoopCond{清單還有未結帳商品嗎?}
    LoopCond -->|Yes| AddPrice[total = total + 商品價格]
    AddPrice --> LoopCond
    LoopCond -->|No| DiscountCond{total >= 1000?}
    DiscountCond -->|Yes| ApplyDiscount[total = total * 0.9]
    DiscountCond -->|No| Print[輸出最終總金額]
    ApplyDiscount --> Print
    Print --> End((結束))
```

---

# 範例 13：生活化串列 - 找出班級最高分
**走訪串列尋找最大值 (Max)**

```mermaid
graph TD
    Start((開始)) --> Init[最高分 max = 0, 取得成績清單 scores]
    Init --> LoopCond{清單中還有成績嗎?}
    LoopCond -->|Yes| GetScore[取出下一個成績 score]
    GetScore --> Compare{score > max?}
    Compare -->|Yes| UpdateMax[max = score]
    Compare -->|No| LoopCond
    UpdateMax --> LoopCond
    LoopCond -->|No| Print[輸出最高分 max]
    Print --> End((結束))
```

---

# 範例 14：生活化串列 - 篩選及格名單
**條件過濾與新增資料到新串列 (Append)**

```mermaid
graph TD
    Start((開始)) --> Init[建立空清單 pass_list, 取得全班成績 scores]
    Init --> LoopCond{清單中還有成績嗎?}
    LoopCond -->|Yes| GetScore[取出下一個成績 score]
    GetScore --> Check{score >= 60?}
    Check -->|Yes| Append[將 score 加入 pass_list]
    Check -->|No| LoopCond
    Append --> LoopCond
    LoopCond -->|No| Print[輸出及格名單 pass_list]
    Print --> End((結束))
```

---

# 範例 15：進階範例 - 密碼強度驗證
**多條件綜合檢查 (長度、大寫、數字)**

```mermaid
graph TD
    Start((開始)) --> Input[輸入密碼 Pwd]
    Input --> LenCheck{長度 >= 8?}
    LenCheck -->|No| Fail[驗證失敗]
    LenCheck -->|Yes| UpperCheck{包含大寫字母?}
    UpperCheck -->|No| Fail
    UpperCheck -->|Yes| NumCheck{包含數字?}
    NumCheck -->|No| Fail
    NumCheck -->|Yes| Pass[驗證成功]
    Fail --> End((結束))
    Pass --> End
```

---

# 總結

1. **流程圖是寫程式的藍圖**：先畫圖釐清邏輯，再動手寫 Python 程式碼，能大幅減少 Bug。
2. **Mermaid 語法簡單**：只要掌握 `graph TD`、節點形狀 `[]` `()` `{}` 以及箭頭 `-->`，就能畫出 90% 的流程圖。
3. **Mermaid 語法可以直接給AI看**：Vibe coding。
4. **三大控制結構**：
   - **循序** (箭頭直線往下)
   - **選擇/判斷** (菱形節點分岔)
   - **重複/迴圈** (箭頭指回上方的節點)

---

# Q & A 時間

- 參考資料：
  - [Mermaid 官方文件 - Flowcharts](https://mermaid.ai/open-source/syntax/flowchart.html)
  - [HackMD Mermaid 教學](https://hackmd.io/@docs/mermaid_graphTD)
  - Mermaid線上編輯器: https://www.processon.io/zh-tw/mermaid
  - 互動式 Mermaid 流程圖教學 https://www.csie.ntu.edu.tw/~d95015/mermaid.html

**大家有什麼問題嗎？**
