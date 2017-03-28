import $ from 'jquery';
import Util from './Util.js';

$(function(){
    // 実行する処理
    new Util("テストテストUtil");
    $(".date").html("変更");
});