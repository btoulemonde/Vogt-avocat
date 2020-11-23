function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccueilAccueilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"countainer-fluid\">\n  <div class=\"jumbotron jumbotron-fluid text-center my-auto\" style=\"   background-image:\n  url('../../assets/image/cour3.jpg');\n\n     min-width: 100%;\n     height: auto;\n    background-attachment: fixed;\n    background-position: center;\">\n    <div class=\"row\">\n      <div class=\" col-md-6 mx-auto\">\n        <div class=\" align-self-center card  text-center \">\n          <div class=\"card-body\">\n            <p>\n              Avocat inscrit au Barreau de MONTPELLIER, Maître Emilie VOGT vous conseille, vous\n              accompagne et vous défend pour résoudre les difficultés auxquelles vous êtes confrontez.\n              <br /><br />\n              Maître Emilie VOGT intervient de la phase de conseil jusqu'à la phase contentieuse.\n              <br /><br />\n\n            </p>\n\n            <ul>\n              <li>En conseil, Maître Emilie VOGT mène des démarches de résolution amiable afin de mettre un terme au\n                conflit et ainsi vous éviter une procédure judiciaire.<br /></li>\n              <li>En contentieux, Maître Emilie VOGT vous représente et défend vos intérêts devant les juridictions.\n              </li>\n            </ul>\n            <p class=\"lead mt-4\">\n              <a class=\"btn btn-primary mb-1 ml-1 \" href=\"#\" role=\"button\" routerLink=\"/presentation\">\n                <strong>En savoir plus</strong>\n              </a>\n              <a class=\"btn btn-primary mb-1 ml-1\" href=\"#\" role=\"button\" routerLink=\"/contact\">\n                <strong>Contactez moi</strong>\n              </a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"my-5 mx-5\">\n    <app-home-feature></app-home-feature>\n  </div>\n\n  <div class=\"my-5 mx-5 \">\n  <div class=\"jumbotron jumbotron-fluid text-center my-auto bnt\" style=\"background-color: #245379a4;\">\n\n      <h5 class=\"mb-3\">Vous avez une question ?</h5>\n      <h5 class=\"mb-5\">Vous souhaitez pendre rendez-vous ou reçevoir un devis personalisé ?</h5>\n\n\n      <a class=\"btn btn-primary  \" role=\"button\" routerLink=\"/contact\">\n        <strong>Contactez moi</strong></a>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <app-menu></app-menu>\n</header>\n\n<body>\n  <div style=\"min-height: 70vh;\">\n    <router-outlet></router-outlet>\n  </div>\n</body>\n\n\n\n<footer>\n  <app-footer></app-footer>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-home/card-home.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-home/card-home.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardHomeCardHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <div class=\"card my-1 \" (click)=\"goTo(id)\">\n    <img [src]=\"icon\" class=\"w-25 img-fluid mx-auto d-block my-3 \" />\n    <div class=\"card-body mb-1\">\n      <h5 style=\"font-family: Baskerville; text-align: center; font-weight: bold; \">{{title}}</h5>\n\n\n\n\n\n\n    </div>\n\n\n  </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/competences/competences.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/competences/competences.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompetencesCompetencesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"countainer-fluid col-md-8 mx-auto my-5\">\n\n  <div class=\"row justify-content-center mb-3\">\n    <div class=\"d-flex \">\n      <h3 style=\"text-align: center; color:  #084b83;\">Domaines d'interventions\n        <br />\n        <hr style=\"border-color: #084b83;width: 143px;border-bottom-width: 2px\" />\n      </h3>\n    </div>\n  </div>\n\n  <div class=\"countainer-fluid mx-1 my-3\">\n    <ul ngbNav #nav=\"ngbNav\" [activeId]=\"active\" class=\"nav-tabs\">\n      <li [ngbNavItem]=\"1\">\n        <a ngbNavLink>Droit de la réparation du dommage corporel</a>\n        <ng-template ngbNavContent>\n          <p class=\"mt-5 mx-5 in\">\n            Si vous êtes victime d'une agression, d'un accident de la route, d'un accident domestique, d'un accident\n            de sport ou d'un accident médical, Maître Emilie VOGT œuvre pour que vous obteniez l'indemnisation intégrale\n            de vos préjudices.\n            <br /><br/>\n            Si vous avez déjà obtenu l'indemnisation de vos préjudices mais que vous souffrez d'une aggravation de votre\n            état de santé, Maître Emilie VOGT est à votre écoute pour vous accompagner dans les démarches en vue\n            d'obtenir\n            une nouvelle indemnisation.\n            <br/>\n          </p>\n          <ul class=\"mt-3 mx-5\">\n            <li>\n              Assistance ou représentation des victimes d'infractions ou d'accidents en vue d'obtenir leur juste indemnisation dans le cadre d'un recours amiable ou contentieux devant les juridictions compétentes (tribunal correctionnel, tribunal judicaire, tribunal administratif)\n            </li>\n            <li>Intervention auprès des compagnies d'assurance</li>\n            <li>Intervention devant le Service d'Aide au Recouvrement des Victimes d'Infractions (SARVI), la Commission d'Indemnisation des Victimes d'Infractions (CIVI), la Commission de Conciliation et d'Indemnisation des Accidents Médicaux des Affections Iatrogènes et des Infections Nosocomiales (CCI) et l'Office National d'Indemnisation des Accidents Médicaux (ONIAM)</li>\n            <li>Assistance aux expertises médicales</li>\n          </ul>\n\n\n\n        </ng-template>\n      </li>\n      <li [ngbNavItem]=\"2\">\n        <a ngbNavLink>Droit de la famille, des personnes et de l'enfant </a>\n        <ng-template ngbNavContent>\n          <p class=\"mt-5 mx-5\">Si vous souhaitez un conseil ou engager une procédure amiable ou contentieuse ou bien qu'une action est diligentée à votre encontre devant le Juge aux affaires familiales (JAF), Maître Emilie VOGT est à votre écoute pour vous orienter et défendre vos intérêts.\n            <br/>\n          </p>\n            <ul class=\"mt-3 mx-5 in\">\n              <li>Divorce (divorce par consentement mutuel, divorce par acte d'avocat, divorce pour acceptation du principe de la rupture du mariage, divorce pour faute, divorce pour altération définitive du lien conjugal)</li>\n              <li>Séparation de corps</li>\n              <li>Rupture de PACS</li>\n              <li>Annulation de mariage</li>\n              <li>Autorité parentale </li>\n              <li>Garde d'enfant</li>\n              <li>Droit de visite et d'hébergement des parents, des grands-parents, des beaux-parents …</li>\n              <li>Pension alimentaire </li>\n              <li>Devoir de secours</li>\n              <li>Contribution aux charges du mariage </li>\n              <li>Médiation</li>\n              <li>Action en recherche ou en contestation de paternité ou de maternité</li>\n              <li>Adoption</li>\n              <li>Changement de sexe</li>\n              <li>Changement de nom, changement de prénom</li>\n              <li>Protection du conjoint victime de violences conjugales</li>\n              <li>Tutelle, curatelle </li>\n            </ul>\n\n        </ng-template>\n      </li>\n      <li [ngbNavItem]=\"3\">\n        <a ngbNavLink>Droit patrimonial des personnes </a>\n        <ng-template ngbNavContent>\n          <p class=\"mt-5 mx-5\">Si vous êtes confronté à une difficulté à la suite d'un décès d'un proche, Maître Emilie VOGT est à votre écoute afin de vous orienter vers la procédure amiable ou contentieuse qui vous êtes la plus adaptée.\n            <br/>\n          </p>\n          <ul class=\"mt-5 mx-5 in\">\n            <li>Successions (liquidation et partage)</li>\n            <li>Contestation d'un testament</li>\n            <li>Assistance aux expertises</li>\n          </ul>\n        </ng-template>\n      </li>\n      <li [ngbNavItem]=\"4\">\n        <a ngbNavLink>Droit pénal</a>\n        <ng-template ngbNavContent>\n          <p class=\"mt-5 mx-5\">Si vous êtes mis en cause ou victime, Maître Emilie VOGT vous assiste et vous représente en amont du procès et devant l'ensemble des juridictions (tribunal de police, tribunal correctionnel, Cour d'assises, tribunal pour enfants, Cour d'appel).\n            <br/>\n          </p>\n          <ul class=\"mt-5 mx-5 in\">\n            <li>Garde à vue</li>\n            <li>Audition libre</li>\n            <li>Intervention  devant le juge d'instruction (mis en examen, témoin assisté)</li>\n            <li>Défense des mineurs et des majeurs auteurs ou victimes d'infractions devant les Tribunaux et la Cour d'appel</li>\n          </ul>\n        </ng-template>\n      </li>\n      <li [ngbNavItem]=\"5\">\n        <a ngbNavLink>Droit civil général et des contrats</a>\n        <ng-template ngbNavContent>\n          <p class=\"mt-5 mx-5\">Si vous souhaitez engager une action à l'encontre d'un tiers qui vous a causé un dommage ou si vous êtes mis en cause par un tiers, Maître Emilie VOGT vous accompagne afin de mettre un terme au litige.\n            <br/><br/>\n            Maître Emilie VOGT s'attache à trouver une solution à votre litige tant sur le plan amiable que devant le tribunal judiciaire (ancien tribunal de grande instance et ancien tribunal d'instance).\n            <br/>\n          </p>\n\n          <ul class=\"mt-5 mx-5 in\">\n            <li>Responsabilité civile contractuelle et délictuelle</li>\n            <li>Rédaction de contrats</li>\n            <li>Intervention en cas de litige lié à l'exécution d'un contrat</li>\n            <li>Réparation des préjudices liés à l'exécution d'un contrat</li>\n            <li>Résolution ou résiliation de contrats</li>\n            <li>Clauses abusives</li>\n            <li>Réparation des préjudices causés par des tiers</li>\n            <li>Trouble du voisinage</li>\n            <li>Bail d'habitation</li>\n            <li>Assistance aux expertises</li>\n          </ul>\n        </ng-template>\n      </li>\n      <li [ngbNavItem]=\"6\">\n        <a ngbNavLink>Procédure d'appel</a>\n        <ng-template ngbNavContent>\n          <p class=\"mt-5 mx-5\">Maître Emilie VOGT assure la défense de vos intérêts que vous soyez appelant de la décision de première\n            instance ou intimé c'est-à-dire attrait devant la Cour d'appel.\n            <br/>\n          </p>\n        </ng-template>\n      </li>\n    </ul>\n    <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n  </div>\n\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"countainer-fluid mx-3 my-3\">\n  <div class=\"row justify-content-center mb-3\">\n    <div class=\"d-flex \">\n      <h3 style=\"text-align: center;\">Contact\n        <br />\n        <hr style=\"border-color: #084b83;width: 143px;border-bottom-width: 2px\" />\n      </h3>\n    </div>\n  </div>\n  <form (ngSubmit)=\"sendEmail()\" #etatForm=\"ngForm\" class=\"was-validated\">\n    <div class=\"form-row  \">\n      <div class=\"form-group  col-md-6  mx-auto\">\n        <label for=\"nom\">Nom *</label>\n\n        <input type=\"text\" class=\" form-control is-invalid\" id=\"nom\" name=\"nom\" [(ngModel)]=\"user.nom\"\n          #etatNom=\"ngModel\" required>\n        <div class=\"invalid-feedback\" *ngIf=\"etatNom.invalid\">le nom est obligatoire</div>\n      </div>\n\n      <div class=\"form-group col-md-6  mx-auto\">\n        <label for=\"prenom\">Prénom *</label>\n        <input type=\"text\" class=\"form-control is-invalid\" name=\"prenom\" [(ngModel)]=\"user.prenom\" #etatprenom=\"ngModel\"\n          required>\n        <div class=\"invalid-feedback\" *ngIf=\"etatprenom.invalid \">Le prénom est obligatoire</div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n\n      <div class=\"form-group  col-md-6  mx-auto\">\n        <label for=\"email\">Email *</label>\n        <input type=\"email\" class=\"form-control is-invalid\" name=\"email\" [(ngModel)]=\"user.email\" #etatEmail=\"ngModel\"\n          required email>\n        <div class=\"invalid-feedback\" *ngIf=\"etatEmail.invalid \">L'email est obligatoire</div>\n      </div>\n      <div class=\"form-group col-md-6  mx-auto\">\n        <label for=\"telephone\">Télephone</label>\n        <input type=\"text\" class=\"form-control \" name=\"telephone\" [(ngModel)]=\"user.telephone\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n\n      <div class=\"form-group col-md-12  mx-auto\">\n        <label for=\"message\">Message *</label>\n        <textarea type=\"text\" class=\"form-control is-invalid\" name=\"message\" [(ngModel)]=\"user.message\"\n          #etatmessage=\"ngModel\" required></textarea>\n        <div class=\"invalid-feedback\" *ngIf=\"etatmessage.invalid\">Veuillez saisir votre demande</div>\n      </div>\n    </div>\n    <div class=\" d-flex justify-content-center\">\n      <div *ngIf=\"err\" class=\"text-danger text-center\">\n        Oops, une erreur s'est produite, merci de renouveller l'opération\n      </div>\n\n      <div *ngIf=\"ok\" class=\"alert alert-success\" role=\"alert\">\n        Votre message a bien été envoyé :)\n      </div>\n\n    </div>\n    <input type=\"hidden\" name=\"_subject\" value=\"Contact \">\n  <!-- Custom email ReplyTo Address -->\n  <input type=\"hidden\" name=\"_replyto\" value=\"contact.maitrevogt@gmail.co\">\n\n    <ng-container *ngIf=\"!sending; else elseBlockLoading\">\n\n      <div class=\" d-flex justify-content-center\">\n\n        <div>\n          <button class=\"btn btn-primary \" type=\"submit\" [disabled]=\"etatForm.invalid\">Envoyer</button>\n        </div>\n\n      </div>\n    </ng-container>\n  </form>\n\n  <div class=\"row mt-5\">\n    <div class=\"mx-auto\">\n      <h4 class=\"text-center\">Nous trouver :</h4>\n      <ul class=\"mx-auto\">\n        <li ><p  style=\"font-size: large;\"><strong>En voiture : </strong>parking des Arceaux </p></li>\n        <li><p  style=\"font-size: large;\"><strong>En tramway : </strong> T4 arrêt Peyrou/Arc de Triomphe, T3 arrêt Plan Cabanes</p></li>\n        <li><p  style=\"font-size: large;\">Cabinet accessible aux personnes à mobilité réduite</p></li>\n\n      </ul>\n\n\n    </div>\n  </div>\n  <div class=\"row mx-auto my-3 d-flex justify-content-center\">\n    <iframe\n      src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.7138509795177!2d3.864753315447036!3d43.61249927912267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af00488794b7%3A0x346515011bac5665!2s5%20Rue%20Doria%2C%2034000%20Montpellier!5e0!3m2!1sfr!2sfr!4v1589812402662!5m2!1sfr!2sfr\"\n      width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\"\n      tabindex=\"0\"></iframe>\n  </div>\n</div>\n\n<ng-template #elseBlockLoading>\n  <div class=\" d-flex justify-content-center\">\n\n    <div>\n      <button class=\"btn btn-primary\" type=\"button\" disabled>\n        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n        envoi en cours...\n      </button>\n    </div>\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"countainer-fluid \">\n  <div class=\"row \">\n    <div class=\"col-12 mt-3\">\n\n      <p>Maître Emilie VOGT<br/>\n        Avocat à la Cour</p>\n        <hr style=\"width: 143px;border-bottom-width: 2px;\"/>\n        <address>\n           5, rue Doria -\n          34000 Montpellier<br/>\n          <a style=\"color: #d9dcdf\" href=\"tel:+33467609895\"> Tél : 04 67 60 98 95 - </a>\n          <a style=\"color: #d9dcdf\" href=\"fax:+33467609896\"> Fax : 04 67 60 98 96</a>\n\n\n        </address>\n        <hr style=\"width: 143px;border-bottom-width: 2px\"/>\n\n\n\n\n        <p>Tout droit réservés</p>\n\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-feature/home-feature.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-feature/home-feature.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeFeatureHomeFeatureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"countainer\">\n  <div class=\"row mb-3\">\n    <app-card-home *ngFor=\"let feature of features\" class=\"col-xl-2 col-sm-4 d-flex align-items-stretch\"\n    [title]=\"feature.title\"\n    [icon]=\"feature.icon\"\n    [id]=\"feature.id\"></app-card-home>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/honoraire/honoraire.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/honoraire/honoraire.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHonoraireHonoraireComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"countainer-fluid mx-3 my-3\" >\n  <div class=\"row justify-content-center mb-3\">\n    <div class=\"d-flex \">\n      <h3 style=\"text-align: center;\">Honoraires\n        <br />\n        <hr style=\"border-color: #084b83;width: 143px;border-bottom-width: 2px\" />\n      </h3>\n    </div>\n  </div>\n <div class=\"row mx-3\">\n  <div class=\" col-md-8 offset-md-2  my-3\" >\n    <h5>Honoraire de diligences </h5>\n    <p>Le montant des honoraires est librement fixé avec le client et tiennent compte :\n      <br />\n    </p>\n    <ul>\n      <li>de la situation de fortune du client,</li>\n      <li>du temps consacré à l'affaire,</li>\n      <li>du travail de recherche et des diligences à accomplir</li>\n      <li>de la nature et de la difficulté de l'affaire,</li>\n      <li>de l'importance des intérêts en cause,</li>\n      <li>de l'incidence des frais et charges du cabinet d'avocat,</li>\n      <li>de la notoriété, de l'expérience et de l'ancienneté de l'avocat,</li>\n      <li>des avantages et du résultant obtenus au profit du client,</li>\n    </ul>\n    <p>\n      La plupart des dossiers sont facturés sur une base forfaitaire définie en fonction de ces paramètres.\n      <br/>\n      Certains honoraires peuvent être fixés au temps passé selon un taux horaire défini préalablement à toute intervention.\n    </p>\n\n    <h5>Honoraire de résultat</h5>\n    <p>\n      Certains dossiers peuvent également faire l'objet d'une facturation additionnelle basée sur le résultat obtenu et les sommes effectivement encaissées.\n      <br/>\n      Il s'agit d'un complément d'honoraires correspondant à un pourcentage du gain ou de l'économie réalisé par le client.\n      <br/>\n      Cet honoraire est prélevé directement, avec votre autorisation, sur les sommes qui vous seront versées par la partie adverse.\n    </p>\n\n    <h5>Convention d'honoraires</h5>\n\n    <p>\n      Maître Emilie VOGT n'engage aucune démarche sans que la question financière n'ait été réglée afin d'éviter tout litige.\n      <br/>\n      Une convention d'honoraires portant sur le montant des honoraires et leurs modalités de paiement sera signée entre le client et l'avocat afin de permettre une meilleure visibilité des coûts et un travail en confiance.\n    </p>\n\n    <h5>L'aide juridictionelle</h5>\n    <p>\n      Si vous avez de faibles revenus, vous pouvez bénéficier de l'aide juridictionnelle.\n      <br/>\n      En fonction du niveau de vos ressources, l'État peut prendre en charge la totalité ou une partie des frais de justice (honoraires d'avocat, frais d'huissier, frais d'expertise, ...).\n    </p>\n\n    <h5>L'assurance de protection juridique</h5>\n    <p>\n      Vous êtes peut être bénéficiaire d'une assurance de protection juridique souscrite à titre principale ou complémentaire à un autre contrat d'assurance (responsabilité civile, habitation, auto, ...).\n      <br/>\n      Cette garantie vous permet de bénéficier de la prise en charge des honoraires d'avocats et des frais de justice suivant le barème contractuel établi par l'assurance.\n      <br/>\n      L'aide juridictionnelle ne peut être accordée lorsque les frais de justice sont pris en charge par un contrat d'assurance de protection juridique.\n    </p>\n\n  </div>\n\n</div>\n\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"countainer-fluid\">\n  <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n    <a class=\"navbar-brand ml-5\" routerLink=\"/accueil\">\n      <img src=\"/assets/image/logo.png\" width=\"150\" height=\"150\" alt=\"\" loading=\"lazy\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" aria-controls=\"navbarContent\" [attr.aria-expanded]=\"!collapsed\" aria-label=\"Toggle navigation\" (click)=\"collapsed = !collapsed\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse\" [class.collapse]=\"collapsed\"  id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav mx-auto\">\n        <a class=\"nav-item nav-link active mx-3\" routerLinkActive=\"active\" routerLink=\"/accueil\">Accueil<span class=\"sr-only\">(current)</span></a>\n        <a class=\"nav-item nav-link mx-3\" routerLinkActive=\"active-link\" routerLink=\"/presentation\">Présentation</a>\n        <a class=\"nav-item nav-link mx-3\" routerLinkActive=\"active-link\" routerLink=\"/domaineCompétences\">Domaines d'interventions</a>\n\n        <a class=\"nav-item nav-link mx-3\" routerLinkActive=\"active-link\" routerLink=\"/honoraire\">Honoraires</a>\n        <a class=\"nav-item nav-link mx-3\" routerLinkActive=\"active-link\" routerLink=\"/contact\">Contact</a>\n\n      </div>\n    </div>\n  </nav>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/presentation.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/presentation.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPresentationPresentationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"countainer-fluid mx-3 mt-3 mb-5\">\n  <div class=\"row justify-content-center mb-3\">\n    <div class=\"d-flex \">\n      <h3>Présentation\n        <br />\n        <hr style=\"border-color: #084b83;width: 143px;border-bottom-width: 2px\" />\n      </h3>\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-10-offset-1 col-lg-4\">\n      <img src=\"assets/image/1.png\" class=\"align-self-center rounded-circle img-fluid mx-auto d-block\"\n        alt=\"Responsive image\">\n    </div>\n    <div class=\"col-md-10-offset-1 col-lg-8 mx-auto my-3\">\n\n      <p>Outre le Certificat d'Aptitude à la Profession d'Avocat, je suis également titulaire d'un Master II en Droit pénal des affaires, d'un diplôme universitaire de Droit pénal et sciences criminelles ainsi que d'un diplôme universitaire en Droit des contrats et des obligations.</p>\n      <p >J'ai prêté serment au Barreau de MONTPELLIER en 2018.</p>\n      <p >Je suis soucieuse de garantir à mes clients le respect de règles fondamentales que sont l'écoute, la disponibilité, l'accessibilité et l'efficacité.</p>\n      <p >Je vous conseille sur les démarches à entreprendre ou la procédure à engager en fonction de vos besoins et de vos attentes, mais également en fonction de votre situation personnelle.</p>\n      <p >J'assure ainsi un service de conseil, d'assistance juridique et également de représentation devant les Juridictions.</p>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/accueil/accueil.component.css":
  /*!***********************************************!*\
    !*** ./src/app/accueil/accueil.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccueilAccueilComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\np{\n  font-size: medium;\n}\n  h1, h2, h3, h4, h5, h6, p, ul, li{\n    font-family: Baskerville;\n    color: #000000;\n    text-align: center;\n\n    font-weight: bold;\n    margin-bottom:5px;\n\n  }\n  .card{\n    background-color: rgba(190, 190, 190, 0.637);\n    border-width: 3px;\n    border-color: black;\n\n\n  }\n  .card-header{\n    background-color: rgba(190, 190, 190, 0.007) ;\n\n  }\n  .card-body{\n    background-color: rgba(190, 190, 190, 0.007);\n  }\n  .list-group.list-group-flush{\n    background-color: rgba(190, 190, 190, 0.007);\n\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjdWVpbC9hY2N1ZWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxrQkFBa0I7O0lBRWxCLGlCQUFpQjtJQUNqQixpQkFBaUI7O0VBRW5CO0VBQ0E7SUFDRSw0Q0FBNEM7SUFDNUMsaUJBQWlCO0lBQ2pCLG1CQUFtQjs7O0VBR3JCO0VBQ0E7SUFDRSw2Q0FBNkM7O0VBRS9DO0VBQ0E7SUFDRSw0Q0FBNEM7RUFDOUM7RUFDQTtJQUNFLDRDQUE0Qzs7RUFFOUMiLCJmaWxlIjoic3JjL2FwcC9hY2N1ZWlsL2FjY3VlaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5we1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgdWwsIGxpe1xuICAgIGZvbnQtZmFtaWx5OiBCYXNrZXJ2aWxsZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcblxuICB9XG4gIC5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC42MzcpO1xuICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG5cblxuICB9XG4gIC5jYXJkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuMDA3KSA7XG5cbiAgfVxuICAuY2FyZC1ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC4wMDcpO1xuICB9XG4gIC5saXN0LWdyb3VwLmxpc3QtZ3JvdXAtZmx1c2h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjAwNyk7XG5cbiAgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/accueil/accueil.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/accueil/accueil.component.ts ***!
    \**********************************************/

  /*! exports provided: AccueilComponent */

  /***/
  function srcAppAccueilAccueilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccueilComponent", function () {
      return AccueilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AccueilComponent = /*#__PURE__*/function () {
      function AccueilComponent(router) {
        _classCallCheck(this, AccueilComponent);

        this.router = router;
      }

      _createClass(AccueilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigate(['/domaineCompétences']);
        }
      }]);

      return AccueilComponent;
    }();

    AccueilComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AccueilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accueil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accueil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accueil.component.css */
      "./src/app/accueil/accueil.component.css"))["default"]]
    })], AccueilComponent);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'avocat-front';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./accueil/accueil.component */
    "./src/app/accueil/accueil.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./presentation/presentation.component */
    "./src/app/presentation/presentation.component.ts");
    /* harmony import */


    var _competences_competences_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./competences/competences.component */
    "./src/app/competences/competences.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _card_home_card_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./card-home/card-home.component */
    "./src/app/card-home/card-home.component.ts");
    /* harmony import */


    var _home_feature_home_feature_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home-feature/home-feature.component */
    "./src/app/home-feature/home-feature.component.ts");
    /* harmony import */


    var _service_conpetences_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./service/conpetences.service */
    "./src/app/service/conpetences.service.ts");
    /* harmony import */


    var _honoraire_honoraire_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./honoraire/honoraire.component */
    "./src/app/honoraire/honoraire.component.ts");

    var routes = [{
      path: 'accueil',
      component: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    }, {
      path: 'presentation',
      component: _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_10__["PresentationComponent"]
    }, {
      path: 'domaineCompétences',
      component: _competences_competences_component__WEBPACK_IMPORTED_MODULE_11__["CompetencesComponent"]
    }, {
      path: 'honoraire',
      component: _honoraire_honoraire_component__WEBPACK_IMPORTED_MODULE_17__["HonoraireComponent"]
    }, {
      path: '',
      redirectTo: '/accueil',
      pathMatch: 'full'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_10__["PresentationComponent"], _competences_competences_component__WEBPACK_IMPORTED_MODULE_11__["CompetencesComponent"], _card_home_card_home_component__WEBPACK_IMPORTED_MODULE_14__["CardHomeComponent"], _home_feature_home_feature_component__WEBPACK_IMPORTED_MODULE_15__["HomeFeatureComponent"], _honoraire_honoraire_component__WEBPACK_IMPORTED_MODULE_17__["HonoraireComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]],
      providers: [_service_conpetences_service__WEBPACK_IMPORTED_MODULE_16__["CompetenceService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      exports: [_competences_competences_component__WEBPACK_IMPORTED_MODULE_11__["CompetencesComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/card-home/card-home.component.css":
  /*!***************************************************!*\
    !*** ./src/app/card-home/card-home.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardHomeCardHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  background-color: #245379a4;\n  border: 0ch;\n  cursor: pointer;\n\n}\n.card:hover {\n  background-color: #245379ee;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1ob21lL2NhcmQtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxlQUFlOztBQUVqQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY2FyZC1ob21lL2NhcmQtaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ1Mzc5YTQ7XG4gIGJvcmRlcjogMGNoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cbi5jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NTM3OWVlO1xufVxuXG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/card-home/card-home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/card-home/card-home.component.ts ***!
    \**************************************************/

  /*! exports provided: CardHomeComponent */

  /***/
  function srcAppCardHomeCardHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardHomeComponent", function () {
      return CardHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_conpetences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/conpetences.service */
    "./src/app/service/conpetences.service.ts");

    var CardHomeComponent = /*#__PURE__*/function () {
      function CardHomeComponent(router, competence) {
        _classCallCheck(this, CardHomeComponent);

        this.router = router;
        this.competence = competence;
      }

      _createClass(CardHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goTo",
        value: function goTo(id) {
          this.competence.active = id;
          this.router.navigate(['domaineCompétences']);
        }
      }]);

      return CardHomeComponent;
    }();

    CardHomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_conpetences_service__WEBPACK_IMPORTED_MODULE_3__["CompetenceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardHomeComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardHomeComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardHomeComponent.prototype, "id", void 0);
    CardHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-home/card-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-home.component.css */
      "./src/app/card-home/card-home.component.css"))["default"]]
    })], CardHomeComponent);
    /***/
  },

  /***/
  "./src/app/competences/competences.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/competences/competences.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompetencesCompetencesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar {\n  background-color: rgba(252, 252, 252, 0);\n  border-top: 0ch;\n  border-right: 0ch;\n  border-left: 0ch;\n  border-bottom: 1;\n  border-color: #245379;\n  border-width: 5px;\n  border-radius: 0%;\n}\n a{\n   color: black;\n   font-weight: bold;\n }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0ZW5jZXMvY29tcGV0ZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7Q0FDQztHQUNFLFlBQVk7R0FDWixpQkFBaUI7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wZXRlbmNlcy9jb21wZXRlbmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAyNTIsIDI1MiwgMCk7XG4gIGJvcmRlci10b3A6IDBjaDtcbiAgYm9yZGVyLXJpZ2h0OiAwY2g7XG4gIGJvcmRlci1sZWZ0OiAwY2g7XG4gIGJvcmRlci1ib3R0b206IDE7XG4gIGJvcmRlci1jb2xvcjogIzI0NTM3OTtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xufVxuIGF7XG4gICBjb2xvcjogYmxhY2s7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiB9XG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/competences/competences.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/competences/competences.component.ts ***!
    \******************************************************/

  /*! exports provided: CompetencesComponent */

  /***/
  function srcAppCompetencesCompetencesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompetencesComponent", function () {
      return CompetencesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_conpetences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/conpetences.service */
    "./src/app/service/conpetences.service.ts");

    var CompetencesComponent = /*#__PURE__*/function () {
      function CompetencesComponent(competence) {
        _classCallCheck(this, CompetencesComponent);

        this.competence = competence;
        this.isMenuCollapsed = true;
      }

      _createClass(CompetencesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.active = 1;

          if (this.competence.active) {
            this.active = this.competence.active;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.competence.active = null;
        }
      }]);

      return CompetencesComponent;
    }();

    CompetencesComponent.ctorParameters = function () {
      return [{
        type: _service_conpetences_service__WEBPACK_IMPORTED_MODULE_2__["CompetenceService"]
      }];
    };

    CompetencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-competences',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./competences.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/competences/competences.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./competences.component.css */
      "./src/app/competences/competences.component.css"))["default"]]
    })], CompetencesComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\nh3{\n  color: #084b83;\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oM3tcbiAgY29sb3I6ICMwODRiODM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _domains_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../domains/User */
    "./src/app/domains/User.ts");
    /* harmony import */


    var _service_mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/mail.service */
    "./src/app/service/mail.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(mailService, router) {
        _classCallCheck(this, ContactComponent);

        this.mailService = mailService;
        this.router = router;
        this.user = new _domains_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "redirection",
        value: function redirection() {
          this.router.navigate(['/accueil']);
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var _this = this;

          this.err = false;
          this.ok = false;
          this.sending = true;
          this.mailService.sendEmail(this.user).subscribe(function () {
            _this.ok = true;
            _this.sending = false;
            setTimeout(_this.redirection.bind(_this), 5000);
          }, function (error) {
            _this.err = true;
            _this.sending = false;
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _service_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/domains/User.ts":
  /*!*********************************!*\
    !*** ./src/app/domains/User.ts ***!
    \*********************************/

  /*! exports provided: User */

  /***/
  function srcAppDomainsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*{\n  background-color: #245379;\n  font-family: Baskerville;\n  color: #d9dcdf;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NTM3OTtcbiAgZm9udC1mYW1pbHk6IEJhc2tlcnZpbGxlO1xuICBjb2xvcjogI2Q5ZGNkZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/home-feature/home-feature.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/home-feature/home-feature.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeFeatureHomeFeatureComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtZmVhdHVyZS9ob21lLWZlYXR1cmUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home-feature/home-feature.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home-feature/home-feature.component.ts ***!
    \********************************************************/

  /*! exports provided: HomeFeatureComponent */

  /***/
  function srcAppHomeFeatureHomeFeatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeFeatureComponent", function () {
      return HomeFeatureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_conpetences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/conpetences.service */
    "./src/app/service/conpetences.service.ts");

    var HomeFeatureComponent = /*#__PURE__*/function () {
      function HomeFeatureComponent(competence) {
        _classCallCheck(this, HomeFeatureComponent);

        this.competence = competence;
      }

      _createClass(HomeFeatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.features = this.competence.feature;
        }
      }]);

      return HomeFeatureComponent;
    }();

    HomeFeatureComponent.ctorParameters = function () {
      return [{
        type: _service_conpetences_service__WEBPACK_IMPORTED_MODULE_2__["CompetenceService"]
      }];
    };

    HomeFeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-feature',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-feature.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-feature/home-feature.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-feature.component.css */
      "./src/app/home-feature/home-feature.component.css"))["default"]]
    })], HomeFeatureComponent);
    /***/
  },

  /***/
  "./src/app/honoraire/honoraire.component.css":
  /*!***************************************************!*\
    !*** ./src/app/honoraire/honoraire.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHonoraireHonoraireComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3{\n  color: #084b83;\n  text-align: center;\n}\n\nh5 {\n  color: #084b83;\n  font-style: oblique;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9ub3JhaXJlL2hvbm9yYWlyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ob25vcmFpcmUvaG9ub3JhaXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcbiAgY29sb3I6ICMwODRiODM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDUge1xuICBjb2xvcjogIzA4NGI4MztcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/honoraire/honoraire.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/honoraire/honoraire.component.ts ***!
    \**************************************************/

  /*! exports provided: HonoraireComponent */

  /***/
  function srcAppHonoraireHonoraireComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HonoraireComponent", function () {
      return HonoraireComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HonoraireComponent = /*#__PURE__*/function () {
      function HonoraireComponent() {
        _classCallCheck(this, HonoraireComponent);
      }

      _createClass(HonoraireComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HonoraireComponent;
    }();

    HonoraireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-honoraire',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./honoraire.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/honoraire/honoraire.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./honoraire.component.css */
      "./src/app/honoraire/honoraire.component.css"))["default"]]
    })], HonoraireComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.component.css":
  /*!*****************************************!*\
    !*** ./src/app/menu/menu.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\na.nav-item{\n  font-family: Baskerville;\n  border-right: 100px;\n  font-size: large;\n  font-weight: bold;\n\n  color: rgb(100, 100, 100);\n\n}\n\ndiv.dropdown-menu {\n  font-family: Baskerville;\n  border-right: 100px;\n\n  color: rgb(100, 100, 100);\n  background-color: #245379;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCOztFQUVqQix5QkFBeUI7O0FBRTNCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjs7RUFFbkIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hLm5hdi1pdGVte1xuICBmb250LWZhbWlseTogQmFza2VydmlsbGU7XG4gIGJvcmRlci1yaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XG5cbn1cblxuZGl2LmRyb3Bkb3duLW1lbnUge1xuICBmb250LWZhbWlseTogQmFza2VydmlsbGU7XG4gIGJvcmRlci1yaWdodDogMTAwcHg7XG5cbiAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NTM3OTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_conpetences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/conpetences.service */
    "./src/app/service/conpetences.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(competence, router) {
        _classCallCheck(this, MenuComponent);

        this.competence = competence;
        this.router = router;
        this.collapsed = true;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.features = this.competence.feature;
        }
      }, {
        key: "goTo",
        value: function goTo(id) {
          this.competence.active = id;
          this.router.navigate(['domaineCompétences']);
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _service_conpetences_service__WEBPACK_IMPORTED_MODULE_2__["CompetenceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/menu/menu.component.css"))["default"]]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/presentation/presentation.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/presentation/presentation.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPresentationPresentationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3{\n  color: #084b83;\n  text-align: center;\n}\n\np{\n  font-family: Baskerville;\n  font-size: medium;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcbiAgY29sb3I6ICMwODRiODM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucHtcbiAgZm9udC1mYW1pbHk6IEJhc2tlcnZpbGxlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/presentation/presentation.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/presentation/presentation.component.ts ***!
    \********************************************************/

  /*! exports provided: PresentationComponent */

  /***/
  function srcAppPresentationPresentationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentationComponent", function () {
      return PresentationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PresentationComponent = /*#__PURE__*/function () {
      function PresentationComponent() {
        _classCallCheck(this, PresentationComponent);
      }

      _createClass(PresentationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PresentationComponent;
    }();

    PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-presentation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./presentation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/presentation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./presentation.component.css */
      "./src/app/presentation/presentation.component.css"))["default"]]
    })], PresentationComponent);
    /***/
  },

  /***/
  "./src/app/service/conpetences.service.ts":
  /*!************************************************!*\
    !*** ./src/app/service/conpetences.service.ts ***!
    \************************************************/

  /*! exports provided: CompetenceService */

  /***/
  function srcAppServiceConpetencesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompetenceService", function () {
      return CompetenceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CompetenceService = function CompetenceService() {
      _classCallCheck(this, CompetenceService);

      this.feature = [{
        id: 1,
        title: 'Droit de la réparation du dommage corporel',
        icon: 'assets/image/dommage.png'
      }, {
        id: 2,
        title: 'Droit de la famille, des personnes et de l\'enfant',
        icon: 'assets/image/famille.png'
      }, {
        id: 3,
        title: 'Droit patrimonial des personnes',
        icon: 'assets/image/patrimonial.png'
      }, {
        id: 4,
        title: 'Droit pénal',
        icon: 'assets/image/penal.png'
      }, {
        id: 5,
        title: 'Droit civil général et des contrats',
        icon: 'assets/image/civil.png'
      }, {
        id: 6,
        title: 'Procédure d\'appel',
        icon: 'assets/image/appel.png'
      }];
    };

    CompetenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CompetenceService);
    /***/
  },

  /***/
  "./src/app/service/mail.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/mail.service.ts ***!
    \*****************************************/

  /*! exports provided: MailService */

  /***/
  function srcAppServiceMailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailService", function () {
      return MailService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
    };

    var MailService = /*#__PURE__*/function () {
      function MailService(httpClient) {
        _classCallCheck(this, MailService);

        this.httpClient = httpClient;
      }

      _createClass(MailService, [{
        key: "sendEmail",
        value: function sendEmail(user) {
          return this.httpClient.post("".concat(url, "sendemail"), JSON.stringify(user), httpOptions);
        }
      }]);

      return MailService;
    }();

    MailService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MailService);
    /***/
  },

  /***/
  "./src/environments/common.ts":
  /*!************************************!*\
    !*** ./src/environments/common.ts ***!
    \************************************/

  /*! exports provided: config */

  /***/
  function srcEnvironmentsCommonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * Configuration commune à l'environnement de développement et celui de production.
     *
     */


    var config = {
      apiVersion: 'versions',
      apiActuator: 'actuator',
      apiLogin: 'login',
      apiLogout: 'logout',
      apiAuthMe: 'me'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./common */
    "./src/environments/common.ts"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = Object.assign({
      production: false,
      baseUrl: 'https://email22.herokuapp.com/'
    }, _common__WEBPACK_IMPORTED_MODULE_1__["config"]);
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/btoulemonde/Vogt-avocat/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map