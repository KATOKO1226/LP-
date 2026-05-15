document.addEventListener('DOMContentLoaded', () => {
    // HTMLの読み込みが完全に終わったら、中の処理を開始する

    // ===エリア選択ボタンの表示・非表示===
    const backToAreaBtn = document.getElementById('backToArea');
    // id="backToArea" の要素（エリア選択ボタン）を取得して変数に保存
    const header = document.querySelector('header');
    // <header>タグの要素を取得して変数に保存

    window.addEventListener('scroll', () => {
        // ページをスクロールするたびに以下の処理を実行
        if (window.scrollY > header.offsetHeight) {
            // 現在のスクロール量(scrollY) が ヘッダーの高さ(offsetHeight) を超えていたら
            backToAreaBtn.classList.add('is-visible');
            // ボタンに is-visible クラスを付ける（＝ボタンを表示する）

        } else {
            backToAreaBtn.classList.remove('is-visible');
            // そうでなければ is-visible クラスを外す（＝ボタンを隠す）
        }
    });

    // ===エリア選択ボタン：クリックでエリアナビへスクロール===
    backToAreaBtn.addEventListener('click', () => {
         // エリア選択ボタンがクリックされたら以下を実行
        const badge = document.querySelector('.area-select-badge');
         // class="area-select-badge" の要素を取得して変数に保存
        if (badge) {
            // その要素が存在していたら
            const top = badge.getBoundingClientRect().bottom + window.scrollY;
            // badge要素の「下端」の画面上の位置 + 現在のスクロール量
            // ＝ページ先頭からbadge下端までの絶対位置を計算
            window.scrollTo({ top: top, behavior: 'smooth' });
            // 計算した位置までスムーズにスクロールする
        }
    });

    // ===エリアナビ：クリックで各エリアへスクロール===
    const areaNavItems = document.querySelectorAll('.area-nav__item');
    // class="area-nav__item" の要素を全て取得（複数）して変数に保存
    const areaIds = ['douou', 'dounan', 'douhoku', 'doutou'];
    // 各エリアのid名を配列で定義（道央・道南・道北・道東）

    areaNavItems.forEach((item, index) => {
        // 取得したナビ項目を1つずつ順番に処理（indexは0,1,2,3と増える）
        item.style.cursor = 'pointer';
        // マウスを乗せたときにカーソルを指マークにする
        item.addEventListener('click', () => {
            // そのナビ項目がクリックされたら
            const target = document.getElementById(areaIds[index]);
            // indexを使って対応するエリアのid要素を取得
            // 例）index=0 なら id="douou" の要素を取得
            if (target) {
                // その要素が存在していたら
                target.scrollIntoView({ behavior: 'smooth' });
                 // その要素の位置までスムーズにスクロールする
            }
        });
    });
});