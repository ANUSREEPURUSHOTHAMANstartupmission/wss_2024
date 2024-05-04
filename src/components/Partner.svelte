

<script is:inline>
  import Partners from "../components/Partners.svelte";


let menu_open = false;

let menu_slt = [
{
"label" : "2021",
"link" : "https://startupmission.in/shelovestech/2021.html",
"target" : "_blank"
},
{
"label" : "2020",
"link" : "https://startupmission.in/shelovestech/2020.html",
"target" : "_blank"
},
{
"label" : "2019",
"link" : "https://startupmission.in/shelovestech/2019.html",
"target" : "_blank"
}
];

let menu_wss = [
{
"label" : "2020",
"link" : "https://startupmission.in/womensummit/2020/",
"target" : "_blank"
},
{
"label" : "2019",
"link" : "https://startupmission.in/womensummit/2019/",
"target" : "_blank"
}
]

let videoId = "3D41jkThUbQ";
let player;
let open = false;
// let our_partners = [
// {
// "image" : "shelovetechpartner.png"
// },
// {
// "image" : "wsslogo.png"
// },
// {
// "image" : "ksumlogo.png"
// },
// ];
let national_partners = [
{
"image" : "startupindia1.png"
},
];

let institution_partners = [
{
"image" : "samagra.png"
},
];
let media_partners = [
{
"image" : "yourstory 1.png"
},
];

let eco_partners = [

{
"image" : "tiew.png"
},
{
"image" : "cwe.png"
},
{
"image" : "wien.png"
},
{
"image" : "nsrcel.png"
},

{
"image" : "d2c.png"
},
{
"image" : "headstart.png"
},
{
"image" : "We founder Circle.png"
},
{
"image" : "nasscom.png"
}
];
let industry_partners = [

{
"image" : "aws.png"
},
{
"image" : "NSDC.png"
},

{
"image" : "googleforstartups.png"
}
];
let outreach_partners = [

{
"image" : "need.png"
},
{
"image" : "she.png"
},
{
"image" : "logoan.png"
},
{
"image" : "katha.png"
}
];


let training_partners = [

{
"image" : "uniqueworld.png"
},
{
"image" : "cdac.png"
},
{
"image" : "infusory.png"
},
{
"image" : "digitaluniversity.png"
},
{
"image" : "ict.png"
}
];
</script>
<section id="partners" class="py-16 px-5 bg-[#f6f6f6]">
<div class=" mx-auto">
<div class="font-other font-bold text-4xl text-center mb-10">Our Partners</div>
  <!-- <div>
      
      <Partners  partners={our_partners}/>
  </div> -->
<div class="flex md:flex-row flex-col mx-auto items-center justify-evenly gap-10">
<div class="">
  <div class="font-other font-bold text-xl text-center mb-2">National Partner</div>
  <Partners partners={national_partners} />
</div>
<div>
  <div class="font-other font-bold text-xl text-center mb-2">Industry Partners</div>
  
  <Partners  partners={industry_partners}/>
</div>
</div>


<div>
<div class="font-other font-bold text-xl text-center mb-2">Ecosystem Partners</div>

<Partners  partners={eco_partners}/>
</div>

  <!-- <div>
    <div class="font-other font-bold text-xl text-center mb-2">Industry Partners</div>
    
    <Partners  partners={industry_partners}/>
  </div> -->
  <div class=" flex md:flex-row flex-col mx-auto items-center justify-evenly gap-10">
    <div>
      <div class="font-other font-bold text-xl text-center mb-2">Outreach Partners</div>
    
      <Partners  partners={outreach_partners}/>
    </div>
    <div class="">
      <div class="font-other font-bold text-xl text-center mb-2">Media Partner</div>
    
      <Partners partners={media_partners}/>
    </div>
    <div class="">
      <div class="font-other font-bold text-xl text-center mb-2">Institution Partner</div>
    
      <Partners partners={institution_partners}/>
    </div>
   
  </div>
    

    <div>
      <div class="font-other font-bold text-xl text-center mb-2">Training Partners</div>
      
      <Partners  partners={training_partners}/>
    </div>

 
<!-- <div>
    <div class="font-other font-bold text-xl text-center mb-2">Industry Partners</div>
    
    <Partners  partners={industry_partners}/>
</div> -->
</div>


</section>

