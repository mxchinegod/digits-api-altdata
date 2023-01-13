<p align="center">
<a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/alloydylan
"><img style="max-width:175px;" src="./digits2.gif">
</a>
<br>
digits-api-tda is the service responsible for handling TDAmeritrade API data to the main API and the UI. Some endpoints are vanilla i.e. they route to TDA with no processing. Others are tightly coupled to a specific component-API React bridge in DigitsUI.<br>
</p>
<hr>

## 📝 Code Properties ✨ ![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat) ![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat) ![HitCount](https://hits.dwyl.com/dylanalloy/digits-ui.svg?style=flat-square) [![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

##### The stack below is minimal as what we do in this API is mostly bridge external HTTP requests and preprocess data.

| 📁 Library | ⚙ Purpose | 📎 Version |
| :-- | :-: | --: |
| [NodeJS](https://nodejs.org/en/) | Base | 16.18.0 |
| [express](https://www.npmjs.com/package/express) | Session Middleware | 4.18.2 |

##### You will want to know about each of these in depth by the above order.

<br>

## 🎬 Environment ✨

##### `config.js` should be created from `config.example.js`

- `newsApi` is the key which [News API](https://newsapi.org) uses to make authenticated requests.
- `servicePort` is this service's port. If you change it, you will need to change your `config.js` in [digits-api-main](https://github.com/DylanAlloy/digits-api-main)

`npm i` <br> <br>

## 📜 Provided Scripts ✨

##### Digits Pro provides some useful scripts to help you quick start.

##### Scripts provided in `package.json`. It's safe to modify or add additional scripts, but here are the defaults:

### 💡 start

```bash
npm start
```

<br>

## 🏰 Service Mesh API ✨

##### digits-api-altdata is responsible creative problem solving when it comes to data acquisition i.e. if something is scraped and not scheduled, it's probably here. 

 - 🔌 Interfacing [ http ]
     - All API routing is done through http requests. It's possible sockets play a role one day.
 - 🩺 Monitoring [ http ]
     - This API intrinsically reports to digits-api-main
 - 🧮 Preprocessing [ node ]
     - All data is preprocessed, all data is alternative in nature thus has a lot of work done on it before serving to the API where even more may be done, and then to the UI. This is a reason to consolidate where preprocessing occurs as much as possible.

<br>

## 💎 Goals ✨

##### immediate

- [x] Initialize beautiful README.md
- [x] Describe service API role
- [ ] Add husky pre-commit
- [ ] Create mesh diagram
- [x] Explain preprocessor philosophy
- [ ] Add politician investing history

##### long-term

- [ ] Docker images
- [ ] Kubernetes deployment

<br>
<p align="center">
<a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/alloydylan
"><img style="max-width:175px;" src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-3.svg"></a>
</a>
</p>
