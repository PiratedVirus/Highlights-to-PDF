
    // Famous script for crawling
    $foot = $('.feedItem :nth-child(3)'); $child = $($foot).find('a.article-detail');

    $high = $('.feedItem :nth-child(2)'); $content = $($high).find('span.content');
    $link = $($high).find('a.highlight-link');


    for ($i = 0; $i < $content.length; $i++) {
        console.log("<p class=\"cont\">" + $content[$i].textContent + "</p><br> <a src=\" " + $link[$i].dataset.articleUrl + "\">" + $child[$i].text + "</a><br>");
        // For  future ref: Just Copy and paste output of console to VS Code, manipulate few arrangments, Save as HTML n then convert webpage into PDF. 
    }
