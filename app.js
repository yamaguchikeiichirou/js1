// メイン部分
let alertString;

// 作成した関数を呼び出し、変数へ格納
alertString = addString("WebCamp");

//変数の中身をアラートで表示する
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}

let promptStr = prompt('何か好きな文字を入力してください。');

alert(promptStr);


// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = WinLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\JavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;
  
  if(js_hand_num == 0){
    hand_name = 'グー';
  }else if(js_hand_num == 1){
    hand_name = 'チョキ';
  }else if(js_hand_num == 2){
    hand_name = 'パー';
  }
  
  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function WinLose(user,js){
  let WinLoseStr;
  
  if(user == 'グー'){
    if(js == 'グー'){
      WinLoseStr = 'あいこ';
    }
    else if(js == 'チョキ'){
      WinLoseStr = '勝ち';
    }
    else if(js == 'パー'){
      WinLoseStr = '負け';
    }
  }
  else if(user =='チョキ'){
    if(js == 'グー'){
      WinLoseStr = '負け';
    }
    else if(js == 'チョキ'){
      WinLoseStr = 'アイコ';
    }
    else if(js == 'パー'){
      WinLoseStr = '勝ち';
    }
  }
  else if(user == 'パー'){
    if(js =='グー'){
      WinLoseStr = '勝ち';
    }
    else if(js == 'チョキ'){
      WinLoseStr = '負け';
    }
    else if(js == 'パー'){
      WinLoseStr = 'あいこ';
    }
  }
  
  return WinLoseStr;
}