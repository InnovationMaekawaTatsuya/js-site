document.addEventListener('DOMContentLoaded', () => {
    // アコーディオンを開く関数
    const accordionOpen = function(e) {
        // 要素の高さをautoに変更
        e.style.height = 'auto';
        // autoにした要素の高さを取得
        let h = e.offsetHeight;
        // 単位を付与
        e.style.height = h + 'px';
        // アニメーション作成＆適応　：　https://developer.mozilla.org/ja/docs/Web/API/Element/animate
        e.animate({
            // 0~要素の高さまでを指定
            height: [ 0, h + 'px' ]
        }, {
            // 0.5sかけて変動
            duration: 500,
        });
        // 高さをautoに戻す　横幅変化に対応できるように
        e.style.height = 'auto';
    };

    // アコーディオン閉じる関数
    const accordionClose = function(e) {
        // 要素の高さを取得
        let h = e.offsetHeight;
        // 単位を付与
        e.style.height = h + 'px';
        // アニメーション作成＆適応　：　https://developer.mozilla.org/ja/docs/Web/API/Element/animate
        e.animate({
            // 要素の高さ~0を指定
            height: [ h + 'px', 0 ]
        }, {
            // 0.5sかけて変動
            duration: 500,
        });
        // 要素の高さを0に戻す　横幅変化に対応できるように
        e.style.height = 0;
    };

    // クリックされた要素のインデックス番号を代入する変数を定義
    let activeIndex = null;

    // クラスinclude-accordionが付与されている要素を取得
    const accordions = document.querySelectorAll('.include-accordion');
    // 個別に処理をする　配列の為
    accordions.forEach( function(accordion) {
        // クラスaccordionBtnが付与されている要素を取得
        const accordionBtns = accordion.querySelectorAll('.accordionBtn');
        // 個別に処理をする　配列の為
        accordionBtns.forEach( function(accordionBtn, index) {
            // 要素がクリックされた時
            accordionBtn.addEventListener('click', function(e) {
            // 要素のインデックス番号を代入
            activeIndex = index;
            // クリックされた要素の親要素のクラスに、
            // activeが付与されていた場合　　　→　除外
            // activeが付与されていいない場合　→　付与
            e.target.parentNode.classList.toggle('active');
            // 次の兄弟要素を取得
            const content = accordionBtn.nextElementSibling;
            // クリックされた要素の親要素にクラスactiveが付与されていた場合、
            if(e.target.parentNode.classList.contains('active')){
                // 関数accordionOpen()を発動
                accordionOpen(content);
            }else{
                // 関数accordionClose()を発動
                accordionClose(content);
            }
            // 個別に処理をする　配列の為
            accordionBtns.forEach( function(accordionBtn, index) {
                // 該当のインデックス番号ではなかった場合、
                if (activeIndex !== index) {
                    // クラスactiveを除外
                accordionBtn.parentNode.classList.remove('active');
                // 次の兄弟要素を取得
                const openedContent = accordionBtn.nextElementSibling;
                // 関数accordionCloseを発動　次の兄弟要素を引数に持たせる
                accordionClose(openedContent);
                }
            });
            // .scroll-controlが付与されている要素を取得　ない場合の返り値はnull
            let container = accordion.closest('.scroll-control');
            // クリックされた要素の親要素のクラスにactiveが付与されておらず、containerの返り値がnullの場合、
            if(accordionBtn.parentNode.classList.contains('active') == false && container !== null ){
                // クラスactiveを除外
                container.classList.remove('active')
                // containerの返り値がnullではない場合、
            }else if (container !== null){
                // クラスactiveを付与
                container.classList.add('active')
            }
            });
        });
    });
});