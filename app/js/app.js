var v = new Vue({

    el: "#vue-app",

    data: {

        campaign: "",
        type: "",
        date: "",
        placeholders: {

            name: "Choose a name for your campaign",
            type: "test"

        }

    },

    methods: {

        getDate: function() {

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if(dd<10) {
                dd = '0'+ dd
            } 

            if(mm<10) {
                mm = '0'+ mm
            } 

            today = yyyy + mm + dd;
            
            return today;

        },

        copyToClipboard: function(event) {

            var result = event.target
            var cm = result.parentNode.querySelector("small");

            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(result);
            selection.removeAllRanges();
            selection.addRange(range);

            try {
                document.execCommand('copy');
                selection.removeAllRanges();
                cm.textContent = "Copied!";

                setTimeout(function() {
                    cm.textContent = "";
                }, 1200);

            } catch(e) {
                cm.textContent = "An error has occured!";
                console.log(e);
            }

        }

    } 

});
 

 