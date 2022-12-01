// DOM構造の読み込みが完了してから読み込む
window.addEventListener('DOMContentLoaded', () => {
    // 変数 tabs に tab クラスの要素の情報を格納
    const tabs = document.getElementsByClassName('tab');
    // tabs の個々の要素に処理をする　※配列形式の為for文を利用
    for(let i = 0; i < tabs.length; i++) {
        // クリックイベントを付与
        // コールバック関数のtabSwitchが動く
        tabs[i].addEventListener('click', tabSwitch);
    }
    // コールバック関数
    function tabSwitch() {
        // 現在 is-active が適応されている要素からクラスを remove
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        // クリックされた要素に is-active を付与
        this.classList.add('is-active');
        // 現在 is-show が適応されている要素からクラスを remove
        document.getElementsByClassName('is-show')[0].classList.remove('is-show');
        // 変数 arrayTabs に クリックされた要素を格納 配列形式の為、取り出す処理が必要
        const arrayTabs = Array.prototype.slice.call(tabs);
        // 変数 index に要素のインデックス番号を格納
        const index = arrayTabs.indexOf(this);
        // クリックされた要素のインデックス番号と同じ番号を持つコンテンツに is-show を付与
        document.getElementsByClassName('panel')[index].classList.add('is-show');
    }
});