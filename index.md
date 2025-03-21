>![starspceafiş](https://github.com/user-attachments/assets/b70a5f9e-ce55-4fe5-8915-9a83e0c6b188)
![Adsızlı24](https://github.com/user-attachments/assets/74b031dd-28eb-400a-883c-87b8e785bafe)
[![starpanosatış](https://github.com/user-attachments/assets/e82cd279-e793-448e-8d37-be585ecba30e)](https://starteknoloji.github.io/Starnet/shop)
 ![asset-generation-1e996bc1-9c19-4797-9fa7-082b2b4af4e3-1-small](https://github.com/user-attachments/assets/fb7c5309-c6a2-44c8-ab75-eb983dd29c34)

***[`(*```STAR``My```Tech`````*****````*****```*****`
***``é``**©**``*``**``***``****``*****``****``***``**``*``*©*``*``**``***``****``*****``****``***``**``*``**©**``é```***`***]***


***[***``(*```STAR``My```Tech`***
***`é``**©**``*``**``***``****``*****``****``***``**``*``*©*``*``**``***``****``*****``****``***``**``*``**©**``é``***]***


# Create a JavaScript Action
<p align="center">
  <a href="https://github.com/actions/javascript-action/actions"><img src="https://github.com/user-attachments/assets/b675b2c3-b678-4988-9d99-90b0aa250836"></a>
 </p>

Use this template to bootstrap the creation of a JavaScript action.:rocket:

This template includes tests, linting, a validation workflow, publishing, and versioning guidance.

If you are new, there's also a simpler introduction.  See the [Hello World JavaScript Action](https://github.com/actions/hello-world-javascript-action)

## Create an action from this template

Click the `Use this Template` and provide the new repo details for your action

## Code in Main

Install the dependencies

```bash
npm install
```

Run the tests :heavy_check_mark:

```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)
...
```

## Change action.yml

The action.yml defines the inputs and output for your action.

Update the action.yml with your name, description, inputs and outputs for your action.

See the [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)

## Change the Code

Most toolkit and CI/CD operations involve async operations so the action is run in an async function.

```javascript
const core = require('@actions/core');
...

async function run() {
  try {
      ...
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
```

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.

## Package for distribution

GitHub Actions will run the entry point from the action.yml. Packaging assembles the code into one file that can be checked in to Git, enabling fast and reliable execution and preventing the need to check in node_modules.

Actions are run from GitHub repos.  Packaging the action will create a packaged action in the dist folder.

Run prepare

```bash
npm run prepare
```

Since the packaged index.js is run from the dist folder.

```bash
git add dist
```
## Create a release branch

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

Checkin to the v1 release branch

```bash
git checkout -b v1
git commit -a -m "v1 release"
```

```bash
git push origin v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! 🧑‍💻:


## Study and Discussion

<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://starteknoloji-space.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<script id="dsq-count-scr" src="//starteknoloji-space.disqus.com/count.js" async></script>

## Websites of our businesses used

Sitelerimizdeki uygulamalar ev ve işyerleri için özelleştirebilir, geliştirilebiliriz. Yorum, istek ve sorularınız için lütfen yazınız. 
NOT; Uygulamamız Konumumuzda geçersizdir.

- [https://www.starcomputer.com.tr](https://starcomputer.com.tr)
- [https://www.mycomputer.digital](https://mycomputer.digital)
- [https://www.satilik.shop](https://satilik.shop)
- [https://www.yerlicins.com](https://yerlicins.com/)
- [https://www.braverclient.com](https://braverclient.com)
- [https://www.cornergrab.com](https://cornergrab.com)

## Save Image Find Box Continue Having Fun

![gamestar](https://github.com/user-attachments/assets/897a4c66-8ab4-402f-9099-85a1478f5509)

`Author`
`Erçetin Güler`

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! 🚀

<script type='text/javascript'>
    var disqus_shortname = 'starteknoloji-space';
    // DON'T EDIT BELOW THIS LINE
    (function () {
        var loaded = false;
        function loadDisqus() {
            if (loaded) return;
            loaded = true;
            var div = document.getElementById('all-comments');
            div.innerHTML = ''; div.id = 'disqus_thread';

            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';

            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

        }

        if ( document.getElementById('all-comments') || document.readyState === "complete" ) {
            return setTimeout( loadDisqus, 1 );
        }

        if ( document.addEventListener ) {
            document.addEventListener( "DOMContentLoaded", loadDisqus, false );
            window.addEventListener( "load", loadDisqus, false );
        } else if ( document.attachEvent ) {
            document.attachEvent( "onreadystatechange", loadDisqus );
            window.attachEvent( "onload", loadDisqus);
        }
    }());
</script>


<div id="disqus_thread"></div>
<script>
    window.addEventListener('message', receiveMessage, false);
    function receiveMessage(event) {
        if (event.data) {
            var msg;
            try {
                msg = JSON.parse(event.data);
            } catch (err) {
                // Do nothing
            }
            if (!msg) {
                return false;
            }
            if (msg.name === 'resize' || msg.name === 'rendered') {
                window.parent.postMessage({
                sentinel: 'amp',
                type: 'embed-size',
                height: msg.data.height
                }, '*');
            }
        }
    }
</script>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
    */
    var disqus_config = function () {
        this.page.url = window.location;
        this.page.identifier = window.location.hash;
    };
    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');

        s.src = '//starteknoloji-space.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
<amp-iframe
    width=600 height=140
    src="https://example.com/amp#hash"
    layout="responsive"
    sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
    resizable
>
    <div
        aria-label="Load more"
        role=button
        tabindex=0
        overflow
        style="display:block;font-size:12px;font-weight:500;font-family:Helvetica Neue, arial, sans-serif;text-align:center;line-height:1.1;padding:12px 16px;border-radius:4px;background:rgba(29,47,58,0.6);color:rgb(255,255,255)"
    >
        Load more
    </div>
</amp-iframe>
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://starteknoloji-space.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<script id="dsq-count-scr" src="//starteknoloji-space.disqus.com/count.js" async></script>
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://starteknoloji-space.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<script id="dsq-count-scr" src="//starteknoloji-space.disqus.com/count.js" async></script>





# ***[MARKALARIMIZ](https://starteknoloji.github.io/Defter)***-----***[HAKKIMIZDA](https://starteknoloji.space/about)*** 
  
<iframe width="1000" height="700" src="https://sway.office.com/s/ZVmi07EqEMcIZgHZ/embed" frameborder="10" marginheight="10" marginwidth="10" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" style="border: 10; max-width: 200%; max-height:200vh" allowfullscreen mozallowfullscreen msallowfullscreen webkitallowfullscreen></iframe>
<iframe src="https://web.starcomputer.space" title="Planet" height="400" width="1000" style="border: 10;"></iframe>
<iframe src="https://uzay.org/canli-yayin/" title="Planet" height="400" width="1000" style="border:10;"></iframe>


# ***APPLİCATİONS***
<iframe src="https://discordapp.com/widget?id=1007605187197800530&theme=dark" width="300" height="350" allowtransparency="true" frameborder="10" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe><iframe src="https://player.vimeo.com/video/886081937?h=32c0e3b16b&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" width="300" height="350" frameborder="10" allow="autoplay; fullscreen; picture-in-picture" title="www.teknik24.tech/tanıtım"></iframe><iframe src="https://player.vimeo.com/video/929495097?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="300" height="350" frameborder="30" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="STAR TEKNİK ‐ StarTeknoloji G2 Katkılarıyla"></iframe>



# ***Game Start Uni***
# ****[``ecece``](https://translate.google.com/?hl=tr)****    
## ***<!* *--* ***`StarshadeSpacetarShineCometStarsuffSecurHub`*** --* >***
## ***- Açık Kaynak Parmak tünel meydan okumak***
## ***- Parlayan gölge kuyruklu yıldızları yıldızkokusu güvende***
## ***Buradaki kelimeleri karıştırıp yazın dilinizde türeyen anlamlardan kahramaınızı bulun… Değişen Evrendeki yönün Içindeki anlamlı kelimeri google translate kullanarak ortaya cıkan cümlelerin anlamlarını yer değiştirin. Defalarca türetin*** 
      ***Oyunun İçeriği: > 10 Tane Herhangi Kelimeyi Yanyana Yazın Sonra Yazdığınız kelimelerden farklı farklı Cümleler Kurun Kuruduğunuz Cümlede Kullandığınız Kelimelerin Eş Anlamlısını Kullanarak değişen daha fazla farklı anlam cıkarın Cıkan Bu Anlamların   içindeki Kahramanınızı Yakalayın!***



<iframe src="https://github.com/sponsors/StarTeknoloji/card" title="Sponsor StarTeknoloji" height="200" width="1000" style="border: 10;"></iframe>

<iframe src="https://github.com/sponsors/Codes-Exe/card" title="Sponsor Codes-Exe" height="200" width="1000" style="border: 10;"></iframe>

<iframe src="https://github.com/sponsors/Teknik24/card" title="Sponsor Teknik24" height="200" width="1000" style="border: 10;"></iframe>


# ***İnformations***
# ![Animation](https://github.com/StarTeknoloji/httpsSTARteknoloji.Space/assets/93947784/27470a3c-28a3-4715-863e-88b6226f8619)![opt4pow6](https://github.com/StarTeknoloji/httpsSTARteknoloji.Space/assets/93947784/838849c5-381f-46ef-8a93-9141de247fa0)
  
The literal continues until de-dented, and the leading indentation is
stripped.

    Any lines that are 'more-indented' keep the rest of their indentation -
    these lines will be indented by 4 spaces. folded_style: > # Comments in YAML look like this.################
# SCALAR TYPES #
################
# Our root object (which continues for the entire document) will be a map,
# which is equivalent to a dictionary, hash or object in other languages.
key: value
another_key: Another value goes here.
a_number_value: 100
scientific_notation: 1e+12
# The number 1 will be interpreted as a number, not a boolean. if you want
# it to be interpreted as a boolean, use true
boolean: true
null_value: null
key with spaces: value
# Notice that strings don't need to be quoted. However, they can be.
however: 'A string, enclosed in quotes.'
'Keys can be quoted too.': "Useful if you want to put a ':' in your key."
single quotes: 'have ''one'' escape pattern'
double quotes: "have many: \", \0, \t, \u263A, \x0d\x0a == \r\n, and more."
# UTF-8/16/32 characters need to be encoded
Superscript two: \u00B2
# Multiple-line strings can be written either as a 'literal block' (using |),
# or a 'folded block' (using '>').
literal_block: |
    This entire block of text will be the value of the 'literal_block' key,
    with line breaks being preserved.
    The literal continues until de-dented, and the leading indentation is
    stripped.
        Any lines that are 'more-indented' keep the rest of their indentation -
        these lines will be indented by 4 spaces.
folded_style: >
    This entire block of text will be the value of 'folded_style', but this
    time, all newlines will be replaced with a single space.
  This entire block of text will be the value of 'folded_style', but this
time, all newlines will be replaced with a single space.

Blank lines, like above, are converted to a newline character.

    'More-indented' lines keep their newlines, too -
    this text will appear over two lines.---  # document start
 Blank lines, like above, are converted to a newline character.
        'More-indented' lines keep their newlines, too -
        this text will appear over two lines.
####################
# COLLECTION TYPES #
####################
# Nesting uses indentation. 2 space indent is preferred (but not required).
a_nested_map:
  key: value
  another_key: Another Value
  another_nested_map:
    hello: hello
# Maps don't have to have string keys.
0.25: a float key
# Keys can also be complex, like multi-line objects
# We use ? followed by a space to indicate the start of a complex key.? |
  This is a key
  that has multiple lines
: and this is its value
# YAML also allows mapping between sequences with the complex key syntax
# Some language parsers might complain
# An example
? - Manchester United
  - Real Madrid
: [2001-01-01, 2002-02-02]
# Sequences (equivalent to lists or arrays) look like this
# (note that the '-' counts as indentation):
a_sequence:
  - Item 1
  - Item 2
  - 0.5  # sequences can contain disparate types.
  - Item 4
  - key: value
    another_key: another_value  -
    - This is a sequence
    - inside another sequence
  - - - Nested sequence indicators
      - can be collapsed
# Since YAML is a superset of JSON, you can also write JSON-style maps and
# sequences:
json_map: {"key": "value"}
json_seq: [3, 2, 1, "takeoff"]
and quotes are optional: {key: [3, 2, 1, takeoff]}
#######################
# EXTRA YAML FEATURES #
#######################
# YAML also has a handy feature called 'anchors', which let you easily duplicate
# content across your document. Both of these keys will have the same value:
anchored_content: &anchor_name This string will appear as the value of two keys.
other_anchor: *anchor_name
# Anchors can be used to duplicate/inherit properties
base: &base
  name: Everyone has same name
# The regexp << is called Merge Key Language-Independent Type. It is used to
# indicate that all the keys of one or more specified maps should be inserted
# into the current map.
foo:
  <<: *base
  age: 10
bar:
  <<: *base
  age: 20
# foo and bar would also have name: Everyone has same name
# YAML also has tags, which you can use to explicitly declare types.
explicit_string: !!str 0.5
# Some parsers implement language specific tags, like this one for Python's
# complex number type.
python_complex_number: !!python/complex 1+2j
# We can also use yaml complex keys with language specific tags
? !!python/tuple [5, 7]
: Fifty Seven
# Would be {(5, 7): 'Fifty Seven'} in Python
####################
# EXTRA YAML TYPES #
####################
# Strings and numbers aren't the only scalars that YAML can understand.
# ISO-formatted date and datetime literals are also parsed.
datetime: 2001-12-15T02:59:43.1Z
datetime_with_spaces: 2001-12-14 21:59:43.10 -5
date: 2002-12-14
# The !!binary tag indicates that a string is actually a base64-encoded
# representation of a binary blob.
gif_file: !!binary |
  R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5
  OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+
  +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC
  AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=
# YAML also has a set type, which looks like this:
set:
  ? item1
  ? item2
  ? item3
or: {item1, item2, item3}
# Sets are just maps with null values; the above is equivalent to:
set2:
  item1: null
  item2: null
  item3: null
...  # document end > |



![rotating_knot](https://github.com/StarTeknoloji/httpsSTARteknoloji.Space/assets/93947784/9dc564fc-3358-4e72-8ede-92118f2c6da3)![h0h82wmd](https://github.com/StarTeknoloji/httpsSTARteknoloji.Space/assets/93947784/7192be5b-1fe6-4500-97ca-943a4ccf5123)


<div style="text-align:center;padding:1em 0;"> <h2><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/en/city/738154"><span style="color:gray;">Current local time in</span><br />Vize, Turkey</a></h2> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=large&timezone=Europe%2FIstanbul" width="100%" height="90" frameborder="50" seamless></iframe> </div>







