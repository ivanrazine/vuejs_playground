var v = new Vue({

    el: "#vue-app",

    data: {

        "title" : "Hellow World Mister Chang"  

    },

    methods: {

        hellow: function() {

            var t = "Change is good";

            var x = document.createElement("h2"); 
            x.className = "child"; 
            x.textContent = t;

            this.$el.querySelector("h1").parentNode.appendChild(x);

        } 

    } 

});

v.hellow();
 