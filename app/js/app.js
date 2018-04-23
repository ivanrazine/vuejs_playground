var v = new Vue({

    el: "#vue-app",

    data: {

        "title" : "Hellow World Mister Chang",
        "greet" : "Hello there Mister!"  

    },

    methods: {

        insertSubtitle: function(txt) {

            var t = txt || this.greet;

            var x = document.createElement("h2"); 
            x.className = "child"; 
            x.textContent = t;

            this.$el.querySelector("h1").parentNode.appendChild(x); 

        } 

    } 

});
 

 