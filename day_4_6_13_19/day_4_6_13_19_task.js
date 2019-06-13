//Start the Tip calculator

//CITATIONS
//https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript
//https://www.w3schools.com/jsref/met_win_confirm.asp


//INITIALIZE EVERYTHING!
var initial_bill_total          = 0;
var tip_total                   = 0;
var post_bill_total             = 0;
var check_1                     = false;
var check_2                     = false;
var quit_check                  = false;

var text_greeting               = "Greetings, my guchi Johnny Boy! Please tell me your BILL TOTAL!";
var text_initial_bill_check_1   = "So sir, the bill you've entered is ";
var text_initial_bill_check_2   = " Is this bill correct?";
var text_proceed_1              = "Okay Dokie";
var text_tip                    = "Tell me how much you want to tip, whole percentage wise, my good sir.";
var text_tip_check_1            = "So my good tipper, the tip you've entered is ";
var text_tip_check_2            = " Is this tip correct?";
var text_result                 = "According to my calculations, the total bill with tip would be...";
var text_quit                   = "Do you want to quit, my guchi Johnny Boy?";
////////////////////////////////////////////////////////////////////////////////////////////
//INIT THE VOICES NOW!
//var msg = new SpeechSynthesisUtterance('Hello World world');
//window.speechSynthesis.speak(msg)
////////////////////////////////////////////////////////////////////////////////////////////
//START THE OVERALL PROGRAM!

while (quit_check == false) // If the user hasn't quit yet
        {
                
                //Request User to confirm total LOOP!
                while (check_1 == false)
                        {
                                var msg = new SpeechSynthesisUtterance(text_greeting); //TTS SPEECH 1
                                window.speechSynthesis.speak(msg);                     //TTS SPEECH 2

                                //Get the initial billing
                                initial_bill_total = prompt(text_greeting);

                                var msg = new SpeechSynthesisUtterance(text_initial_bill_check_1 + "$" + initial_bill_total + text_initial_bill_check_2); //TTS SPEECH 1
                                window.speechSynthesis.speak(msg);                     //TTS SPEECH 2

                                //Request User to confirm total 
                                var sub_check_1 = confirm(text_initial_bill_check_1 + "$" + initial_bill_total + text_initial_bill_check_2);
                                if (sub_check_1 == true) 
                                        {
                                                var msg = new SpeechSynthesisUtterance(text_proceed_1); //TTS SPEECH 1
                                                window.speechSynthesis.speak(msg);                     //TTS SPEECH 2
                                                alert(text_proceed_1);
                                                //Set to true so user can proceed
                                                check_1 = true;
                                        } 

                        }// End 1st loop
                //Request User to confirm tip LOOP!
                while (check_2 == false)
                {
                        var msg = new SpeechSynthesisUtterance(text_tip); //TTS SPEECH 1
                        window.speechSynthesis.speak(msg);                     //TTS SPEECH 2

                        //Get the initial tip
                        tip_total = prompt(text_tip);

                        var msg = new SpeechSynthesisUtterance(text_tip_check_1 + tip_total  + '%' + text_tip_check_2); //TTS SPEECH 1
                        window.speechSynthesis.speak(msg);                     //TTS SPEECH 2

                        //Request User to confirm tip
                        var sub_check_2 = confirm(text_tip_check_1 + tip_total  + '%' + text_tip_check_2);
                        if (sub_check_2 == true)
                                {
                                        ///Print all the results
                                        tip_total = (tip_total * 0.010) + 1;
                                        post_bill_total = (initial_bill_total * tip_total);

                                        var msg = new SpeechSynthesisUtterance(text_result + ' $' + post_bill_total); //TTS SPEECH 1
                                        window.speechSynthesis.speak(msg);                     //TTS SPEECH 2

                                        alert(text_result + ' $' + post_bill_total);
                                        check_2 = true; // Exit 2nd loop 
                                } 

                }// End 2nd loop

                var msg = new SpeechSynthesisUtterance(text_quit); //TTS SPEECH 1
                window.speechSynthesis.speak(msg);                     //TTS SPEECH 2

                var sub_check_3 = confirm(text_quit);
                if (sub_check_3 == true)
                        {
                                break;
                        }
        }

