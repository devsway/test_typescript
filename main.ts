/// <reference path="main.d.ts" />

// In file Main.ts
// タイプ情報がないやーつ。

import * as MyTypes from "MyTypes";

let ajalaJs:MyTypes.Person

ajalaJs = {
    name: "Ajala the traveller",
    age: 12,
    getName: function() {
        return this.name;
    }
};

let mrAjala = ajalaJs.lol();
console.log(mrAjala);