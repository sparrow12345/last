<script lang="ts">
    import type { XCom } from "./Comic";
  
    const EMAIL = "i.mirzazhanov@innopolis.university";
    const ID_URL = "https://fwd.innopolis.app/api/hw2";
    const COMIC_URL = "https://getxkcd.vercel.app/api/comic";
  
    const obtainID: () => Promise<number> = async () => {
      let res = await fetch(ID_URL + `?email=${EMAIL}`);
      let resB: number = await res.json();
      return resB;
    };
  
    const obtainComic: () => Promise<XCom> = async () => {
      let id = await obtainID();
      let res = await fetch(COMIC_URL + `?num=${id}`);
      let resB: XCom = await res.json();
      return resB;
    };
  </script>
  
  {#await obtainComic()}
    <p>Processing...</p>
  {:then comic}
    <div id="comic">
      <img id="img" src={comic.img} alt={comic.alt}/>
      <div>
        <span class="span-title">Title of comic: </span>
        <span class="span-content" id="comic_title">{comic.title}</span>
      </div>
      <div>
        <span class="span-title">Date of publication: </span>
        <span class="span-content" id="date_content">
          {new Date(parseInt(comic.year),parseInt(comic.month) - 1,parseInt(comic.day)).toLocaleDateString()}</span>
      </div>
    </div>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
  
  <style>
    .span-title {
      font-size: larger;
      font-weight: bolder;
    }
    .span-content {
      font-size: medium;
    }
  
    #comic {
      display: flex;
      margin: 25px;
      justify-content: space-between;
      align-items: left;
      flex-direction: column;
      padding: 20px;
    }
  </style>