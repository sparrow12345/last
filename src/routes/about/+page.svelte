<script>
    import github from "$lib/images/github.png";
    import google from "$lib/images/google.png";
    import Telegram from "$lib/images/telegram.png";
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h2>About Me</h2>
    <p>Data Scientist, Software Developer, 
        with a growing thirst for knowledge, and a never-ending passion for IT.</p>

<h2>Contacts</h2>
    <ul>
        <li>
            <img src={github} width="15" height="18" style="vertical-align:bottom" alt='Github'>
            <a id="gh-link" href="https://github.com/sparrow12345">
              GitHub
            </a>
        </li>
        <li>
            <img src={Telegram} width="15" height="18" style="vertical-align:bottom" alt='Telegram'>
            <a id="tg-link" href="https://t.me/Isildur_son_of_Elendil">
              Telegram
            </a>
        </li>
        <li>
            <img src={google} width="15" height="18" style="vertical-align:bottom" alt='Google'>
            <a id="email" href="mailto:majdnaser2013@gmail.com">
              Email
            </a>
        </li>
    </ul>