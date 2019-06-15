//https://www.tutorialspoint.com/typescript/typescript_objects.htm

//The task is to create a 'factory' that
//creates many objects

//I'll use an array & random nums to populate
//these objects

//CITATIONS
//https://www.tutorialspoint.com/typescript/typescript_arrays.htm
//var array_name[:data type] = [val1,val2…valn]

//https://www.tutorialsteacher.com/typescript/typescript-array
//let fruits: string[] = ['Apple', 'Orange', 'Banana'];

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
//Math.floor(Math.random() * 6) + 1  

//////////////////////////////////////////////////////////////////////////////////////////
///Declare the arrays!

var firearm_calibers:       string[] =  ['.22','.32', '.38', '9MM', '.40', '.45' ]
var firearm_types:          string[] =  ['SMG', 'RIFLE', 'PISTOL', 'REVOLVER','AUTO-PISTOL']
var firearm_capacities:     number[] =  [6, 7, 8, 9, 10, 15, 20, 30,]

///Declare the vars!

var random_num      =   0;
var generate_num    =   0;
var placebo_generate=   0;
var message_greeting=   "How many firearms you want us to make today, boss?";
var confirm_text    =   " Firearms? You got it, boss!";
var post_produce    =   "Here's the firearms you've ordered, boss!";

//OBJECT CREATION TEMPLATE!
interface Firearm  
    { 
        firearm_caliber:    string;
        firearm_type:       string; 
        firearm_capacity:   number;
    }; 

///To get size of any defined array
function array_size(array)
    {
        console.log(array.length);
    }

///Generate Random Firearm function

function generate_firearm(generate_num)
    {
        for(var i = 0; i < generate_num; i++)
            {
                //INI & RE-INI VARS
                var fill_in_num_1   = 0;
                var fill_in_num_2   = 0;
                var fill_in_num_3   = 0;
                //Re-get lenght of arrays
                fill_in_num_1       = firearm_calibers.length;
                fill_in_num_2       = firearm_types.length;
                fill_in_num_3       = firearm_capacities.length;
                //Now create an object wit a random element from X array using array lenght
                var firearm = 
                    {
                        //Math.floor(Math.random() * 6) + 1 
                        firearm_caliber:    firearm_calibers[(Math.floor(Math.random() * fill_in_num_1))];
                        firearm_type:       firearm_types[(Math.floor(Math.random() * fill_in_num_2))];
                        firearm_capacity:   firearm_capacities[(Math.floor(Math.random() * fill_in_num_3))];
                    }
                
                //Print all the stats of the generated firearm
                console.log(firearm.firearm_caliber +  " " + firearm.firearm_type + ", " + firearm.firearm_capacity + " Round(s)\n");
            }
    }

generate_firearm(10);


