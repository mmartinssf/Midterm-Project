//image store under 'image_url'
// Nutrion store under 'nutriments'
//calories under 'energy_value'

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'api-get'
})

export class api {

  constructor(public navCtrl: NavController) {

  }
  
 
  

}

api = undefined

api = {
    "product": {
        "countries_tags": ["en:denmark", "en:france", "en:germany", "en:portugal", "en:switzerland"],
        "categories_next_hierarchy": ["en:sugary-snacks", "en:seafood", "en:confectioneries", "en:fishes", "en:bass", "fr:Schokoriegel", "fr:Süßwaren"],
        "labels_tags": ["en:green-dot"],
        "nutrient_levels_tags": ["en:fat-in-high-quantity", "en:saturated-fat-in-high-quantity", "en:sugars-in-high-quantity", "en:salt-in-moderate-quantity"],
        "generic_name_fr": "Chocolat au lait fourré de confiserie et de caramel, avec des cacahuètes grillées",
        "categories_next_tags": ["en:sugary-snacks", "en:seafood", "en:confectioneries", "en:fishes", "en:bass", "fr:schokoriegel", "fr:susswaren"],
        "link": "",
        "created_t": 1389202679,
        "manufacturing_places_tags": [],
        "image_ingredients_thumb_url": "http://static.openfoodfacts.org/images/products/500/015/946/1122/ingredients_fr.12.100.jpg",
        "categories": "Süßwaren,Confectioneries,Bars,Schokoriegel",
        "unique_scans_n": 5,
        "additives_old_tags": ["en:e322"],
        "packaging_tags": ["plastique"],
        "pnns_groups_1_tags": ["sugary-snacks"],
        "allergens_tags": [],
        "last_modified_t": 1473954136,
        "editors_tags": ["anticultist", "mathias", "tacite", "kvliegen", "openfoodfacts-contributors", "securita", "scanbot", "teolemon", "gyrostat", "date-limite-app"],
        "creator": "teolemon",
        "additives": " [ sucre -> fr:sucre  ]  [ sirop-de-glucose -> fr:sirop-de-glucose  ]  [ sirop-de -> fr:sirop-de  ]  [ sirop -> fr:sirop  ]  [ cacahuetes -> fr:cacahuetes  ]  [ lait-ecreme-en-poudre -> fr:lait-ecreme-en-poudre  ]  [ lait-ecreme-en -> fr:lait-ecreme-en  ]  [ lait-ecreme -> fr:lait-ecreme  ]  [ lait -> fr:lait  ]  [ beurre-de-cacao -> fr:beurre-de-cacao  ]  [ beurre-de -> fr:beurre-de  ]  [ beurre -> fr:beurre  ]  [ pate-de-cacao -> fr:pate-de-cacao  ]  [ pate-de -> fr:pate-de  ]  [ pate -> fr:pate  ]  [ lactose -> fr:lactose  ]  [ huile-de-tournesol -> fr:huile-de-tournesol  ]  [ huile-de -> fr:huile-de  ]  [ huile -> fr:huile  ]  [ beurre-concentre -> fr:beurre-concentre  ]  [ beurre -> fr:beurre  ]  [ lait -> fr:lait  ]  [ petit-lait-en-poudre -> fr:petit-lait-en-poudre  ]  [ petit-lait-en -> fr:petit-lait-en  ]  [ petit-lait -> fr:petit-lait  ]  [ petit -> fr:petit  ]  [ matiere-grasse-de-palme -> fr:matiere-grasse-de-palme  ]  [ matiere-grasse-de -> fr:matiere-grasse-de  ]  [ matiere-grasse -> fr:matiere-grasse  ]  [ matiere -> fr:matiere  ]  [ sel -> fr:sel  ]  [ lecithine-de-soja -> fr:lecithine-de-soja  ]  [ lecithine-de -> fr:lecithine-de  ]  [ lecithine -> en:e322  -> exists  ]  [ blanc-d-oeuf-en-poudre -> fr:blanc-d-oeuf-en-poudre  ]  [ blanc-d-oeuf-en -> fr:blanc-d-oeuf-en  ]  [ blanc-d-oeuf -> fr:blanc-d-oeuf  ]  [ blanc-d -> fr:blanc-d  ]  [ blanc -> fr:blanc  ]  [ huile-de-noix-de-coco -> fr:huile-de-noix-de-coco  ]  [ huile-de-noix-de -> fr:huile-de-noix-de  ]  [ huile-de-noix -> fr:huile-de-noix  ]  [ huile-de -> fr:huile-de  ]  [ huile -> fr:huile  ]  [ proteine-de-lait-hydrolysee -> fr:proteine-de-lait-hydrolysee  ]  [ proteine-de-lait -> fr:proteine-de-lait  ]  [ proteine-de -> fr:proteine-de  ]  [ proteine -> fr:proteine  ]  [ extrait-naturel-de-vanille -> fr:extrait-naturel-de-vanille  ]  [ extrait-naturel-de -> fr:extrait-naturel-de  ]  [ extrait-naturel -> fr:extrait-naturel  ]  [ extrait -> fr:extrait  ] ",
        "categories_tags": ["en:seafood", "en:fishes", "en:sugary-snacks", "en:confectioneries", "en:bass", "fr:schokoriegel", "fr:susswaren"],
        "ingredients_from_palm_oil_tags": ["huile-de-palme"],
        "allergens_hierarchy": [],
        "photographers_tags": ["teolemon", "gyrostat", "kvliegen", "openfoodfacts-contributors", "anticultist"],
        "pnns_groups_2_tags": ["sweets"],
        "ingredients_n": "19",
        "image_url": "http://static.openfoodfacts.org/images/products/500/015/946/1122/front_fr.19.400.jpg",
        "codes_tags": ["code-13", "5000159461122", "500015946112x", "50001594611xx", "5000159461xxx", "500015946xxxx", "50001594xxxxx", "5000159xxxxxx", "500015xxxxxxx", "50001xxxxxxxx", "5000xxxxxxxxx", "500xxxxxxxxxx", "50xxxxxxxxxxx", "5xxxxxxxxxxxx"],
        "lc": "fr",
        "purchase_places": "Toulouse,France,Barcelos,Portugal",
        "traces_hierarchy": ["de:Haselnuss"],
        "ingredients_n_tags": ["19", "11-20"],
        "ingredients_text": "Sucre, sirop de glucose, cacahuètes, lait écrémé en poudre, beurre de cacao, pâte de cacao, lactose, huile de tournesol, beurre concentré (lait), petit-lait en poudre, matière grasse de palme, sel, émulsifiant (lécithine de soja), blanc d’œuf en poudre, huile de noix de coco, protéine de lait hydrolysée, extrait naturel de vanille.",
        "interface_version_modified": "20120622",
        "complete": 0,
        "packaging": "plastique",
        "categories_hierarchy": ["en:seafood", "en:fishes", "en:sugary-snacks", "en:confectioneries", "en:bass", "fr:Schokoriegel", "fr:Süßwaren"],
        "purchase_places_tags": ["toulouse", "france", "barcelos", "portugal"],
        "labels_hierarchy": ["en:green-dot"],
        "ingredients_debug": ["Sucre", null, " sirop de glucose", null, " cacahuètes", null, " lait écrémé en poudre", null, " beurre de cacao", null, " pâte de cacao", null, " lactose", null, " huile de tournesol", null, " beurre concentré ", null, "lait", null, "", null, " petit-lait en poudre", null, " matière grasse de palme", null, " sel", null, "  ", null, " ", null, "lécithine de soja", null, "", null, " blanc d’œuf en poudre", null, " huile de noix de coco", null, " protéine de lait hydrolysée", null, " extrait naturel de vanille."],
        "image_front_small_url": "http://static.openfoodfacts.org/images/products/500/015/946/1122/front_fr.19.200.jpg",
        "nutrition_grades_tags": ["e"],
        "ingredients_text_with_allergens_de": "Zucker, Glukosesirup, <span class=\"allergen\">Erdnüsse</span>, <span class=\"allergen\">Magermilchpulver</span>, Kakaobutter, Kakaomasse, Sonnenblumenöl, <span class=\"allergen\">Milchzucker</span>, Butterreinfett (aus <span class=\"allergen\">Milch</span>), Süßmolkenpulver (aus <span class=\"allergen\">Milch</span>), Palmfett, Salz, Emulgator (<span class=\"allergen\">Sojalecithin</span>), <span class=\"allergen\">Hühnerei-Trockeneiweiß</span>, <span class=\"allergen\">Milcheiweiß</span>",
        "id": "5000159461122",
        "stores": "Irma.dk",
        "image_front_url": "http://static.openfoodfacts.org/images/products/500/015/946/1122/front_fr.19.400.jpg",
        "rev": 38,
        "ingredients_tags": ["sucre", "sirop-de-glucose", "cacahuetes", "lait-ecreme-en-poudre", "beurre-de-cacao", "pate-de-cacao", "lactose", "huile-de-tournesol", "beurre-concentre", "lait", "petit-lait-en-poudre", "matiere-grasse-de-palme", "sel", "emulsifiant", "lecithine-de-soja", "blanc-d-oeuf-en-poudre", "huile-de-noix-de-coco", "proteine-de-lait-hydrolysee", "extrait-naturel-de-vanille"],
        "nutrient_levels": {
            "fat": "high",
            "sugars": "high",
            "saturated-fat": "high",
            "salt": "moderate"
        },
        "nutriments": {
            "sodium_unit": "g",
            "salt_unit": "g",
            "salt": "0.62992",
            "sodium": "0.248",
            "nutrition-score-uk": "26",
            "proteins_serving": "4.35",
            "sugars_unit": "g",
            "energy_unit": "kJ",
            "fat_value": "22.9",
            "carbohydrates_serving": "30.1",
            "energy_value": "2026",
            "fat_100g": "22.9",
            "saturated-fat_value": "8.4",
            "nutrition-score-fr": "26",
            "sugars_value": "51.6",
            "sodium_value": "0.248",
            "carbohydrates_100g": "60.2",
            "energy_serving": "1010",
            "sugars_100g": "51.6",
            "proteins": "8.7",
            "fat_serving": "11.4",
            "saturated-fat_100g": "8.4",
            "carbohydrates_unit": "g",
            "carbohydrates_value": "60.2",
            "energy": "2026",
            "nutrition-score-uk_100g": "26",
            "fat_unit": "g",
            "carbohydrates": "60.2",
            "proteins_value": "8.7",
            "sodium_100g": "0.248",
            "saturated-fat_unit": "g",
            "saturated-fat_serving": "4.2",
            "sugars_serving": "25.8",
            "proteins_100g": "8.7",
            "saturated-fat": "8.4",
            "salt_serving": "0.315",
            "sodium_serving": "0.124",
            "sugars": "51.6",
            "energy_100g": "2026",
            "salt_value": "0.62992",
            "nutrition-score-fr_100g": "26",
            "fat": "22.9",
            "proteins_unit": "g",
            "salt_100g": "0.62992"
        },
        "image_ingredients_small_url": "http://static.openfoodfacts.org/images/products/500/015/946/1122/ingredients_fr.12.200.jpg",
        "nutrition_grade_fr": "e",
        "code": "5000159461122",
        "pnns_groups_1": "Sugary snacks",
        "traces_tags": ["de:haselnuss"],
        "unknown_nutrients_tags": [],
        "additives_n": 1,
        "lang": "fr",
        "last_image_dates_tags": ["2016-09-15", "2016-09", "2016"],
        "product_name_fr": "Snickers",
        "states_tags": ["en:to-be-completed", "en:nutrition-facts-completed", "en:ingredients-completed", "en:expiration-date-to-be-completed", "en:characteristics-completed", "en:categories-completed", "en:brands-completed", "en:packaging-completed", "en:quantity-completed", "en:product-name-completed", "en:photos-to-be-validated", "en:photos-uploaded"],
        "nutrition_score_debug": " -- energy 6 + sat-fat 8 + fr-sat-fat-for-fats 5 + sugars 10 + sodium 2 - fruits 0% 0 - fiber 0 - proteins 5 -- fsa 26 -- fr 26",
        "serving_quantity": 50,
        "emb_codes_orig": "",
        "ingredients_from_or_that_may_be_from_palm_oil_n": 1,
        "generic_name": "Chocolat au lait fourré de confiserie et de caramel, avec des cacahuètes grillées",
        "countries": "Dänemark,Frankreich,Deutschland,Portugal,Schweiz",
        "additives_prev_tags": ["en:e322"],
        "allergens": "",
        "image_ingredients_url": "http://static.openfoodfacts.org/images/products/500/015/946/1122/ingredients_fr.12.400.jpg",
        "states_hierarchy": ["en:to-be-completed", "en:nutrition-facts-completed", "en:ingredients-completed", "en:expiration-date-to-be-completed", "en:characteristics-completed", "en:categories-completed", "en:brands-completed", "en:packaging-completed", "en:quantity-completed", "en:product-name-completed", "en:photos-to-be-validated", "en:photos-uploaded"],
        "product_name_de": "Snickers",
        "languages_hierarchy": ["en:german", "en:french"],
        "additives_tags": ["en:e322"],
        "_keywords": ["confiserie", "mar", "fourre", "punkt", "de", "et", "avec", "schokoriegel", "caramel", "snicker", "cacahuete", "grillee", "susswaren", "chocolat", "gruner", "confectionerie", "au", "lait", "bar"],
        "brands_tags": ["snickers", "mars"],
        "traces": "Haselnuss",
        "nutrition_data_per": "100g",
        "last_edit_dates_tags": ["2016-09-15", "2016-09", "2016"],
        "brands": "Snickers,Mars",
        "update_key": "key_1479114673",
        "additives_debug_tags": [],
        "stores_tags": ["irma-dk"],
        "categories_debug_tags": [],
        "fruits-vegetables-nuts_100g_estimate": 0,
        "max_imgid": "17",
        "emb_codes": "",
        "sortkey": 473954136,
        "languages": {
            "en:german": 6,
            "en:french": 5
        },
        "emb_codes_tags": [],
        "nutrition_grades": "e",
        "informers_tags": ["teolemon", "gyrostat", "tacite", "mathias", "anticultist"],
        "languages_tags": ["en:german", "en:french", "en:2", "en:multilingual"],
        "additives_prev": " [ sucre -> fr:sucre  ]  [ sirop-de-glucose -> fr:sirop-de-glucose  ]  [ sirop-de -> fr:sirop-de  ]  [ sirop -> fr:sirop  ]  [ cacahuetes -> fr:cacahuetes  ]  [ lait-ecreme-en-poudre -> fr:lait-ecreme-en-poudre  ]  [ lait-ecreme-en -> fr:lait-ecreme-en  ]  [ lait-ecreme -> fr:lait-ecreme  ]  [ lait -> fr:lait  ]  [ beurre-de-cacao -> fr:beurre-de-cacao  ]  [ beurre-de -> fr:beurre-de  ]  [ beurre -> fr:beurre  ]  [ pate-de-cacao -> fr:pate-de-cacao  ]  [ pate-de -> fr:pate-de  ]  [ pate -> fr:pate  ]  [ lactose -> fr:lactose  ]  [ huile-de-tournesol -> fr:huile-de-tournesol  ]  [ huile-de -> fr:huile-de  ]  [ huile -> fr:huile  ]  [ beurre-concentre -> fr:beurre-concentre  ]  [ beurre -> fr:beurre  ]  [ lait -> fr:lait  ]  [ petit-lait-en-poudre -> fr:petit-lait-en-poudre  ]  [ petit-lait-en -> fr:petit-lait-en  ]  [ petit-lait -> fr:petit-lait  ]  [ petit -> fr:petit  ]  [ matiere-grasse-de-palme -> fr:matiere-grasse-de-palme  ]  [ matiere-grasse-de -> fr:matiere-grasse-de  ]  [ matiere-grasse -> fr:matiere-grasse  ]  [ matiere -> fr:matiere  ]  [ sel -> fr:sel  ]  [ lecithine-de-soja -> fr:lecithine-de-soja  ]  [ lecithine-de -> fr:lecithine-de  ]  [ lecithine -> en:e322  -> exists  ]  [ blanc-d-oeuf-en-poudre -> fr:blanc-d-oeuf-en-poudre  ]  [ blanc-d-oeuf-en -> fr:blanc-d-oeuf-en  ]  [ blanc-d-oeuf -> fr:blanc-d-oeuf  ]  [ blanc-d -> fr:blanc-d  ]  [ blanc -> fr:blanc  ]  [ huile-de-noix-de-coco -> fr:huile-de-noix-de-coco  ]  [ huile-de-noix-de -> fr:huile-de-noix-de  ]  [ huile-de-noix -> fr:huile-de-noix  ]  [ huile-de -> fr:huile-de  ]  [ huile -> fr:huile  ]  [ proteine-de-lait-hydrolysee -> fr:proteine-de-lait-hydrolysee  ]  [ proteine-de-lait -> fr:proteine-de-lait  ]  [ proteine-de -> fr:proteine-de  ]  [ proteine -> fr:proteine  ]  [ extrait-naturel-de-vanille -> fr:extrait-naturel-de-vanille  ]  [ extrait-naturel-de -> fr:extrait-naturel-de  ]  [ extrait-naturel -> fr:extrait-naturel  ]  [ extrait -> fr:extrait  ] ",
        "product_name": "Snickers",
        "countries_hierarchy": ["en:denmark", "en:france", "en:germany", "en:portugal", "en:switzerland"],
        "last_image_t": 1473954136,
        "ingredients_that_may_be_from_palm_oil_n": 0,
        "last_editor": "openfoodfacts-contributors",
        "origins": "",
        "ingredients_ids_debug": ["sucre", "sirop-de-glucose", "cacahuetes", "lait-ecreme-en-poudre", "beurre-de-cacao", "pate-de-cacao", "lactose", "huile-de-tournesol", "beurre-concentre", "lait", "petit-lait-en-poudre", "matiere-grasse-de-palme", "sel", "lecithine-de-soja", "blanc-d-oeuf-en-poudre", "huile-de-noix-de-coco", "proteine-de-lait-hydrolysee", "extrait-naturel-de-vanille"],
        "image_thumb_url": "http://static.openfoodfacts.org/images/products/500/015/946/1122/front_fr.19.100.jpg",
        "generic_name_de": "Milchschokolade, gefüllt mit feiner Candy-Creme (16%), Karamell (27%) und gerösteten Erdnüssen (22%)",
        "ingredients_text_with_allergens_fr": "Sucre, sirop de glucose, cacahuètes, lait écrémé en poudre, beurre de cacao, pâte de cacao, lactose, huile de tournesol, beurre concentré (lait), petit-lait en poudre, matière grasse de palme, sel, émulsifiant (lécithine de soja), blanc d’œuf en poudre, huile de noix de coco, protéine de lait hydrolysée, extrait naturel de vanille.",
        "interface_version_created": "20120622",
        "correctors_tags": ["teolemon", "gyrostat", "scanbot", "securita", "kvliegen", "tacite", "mathias", "anticultist"],
        "ingredients_text_debug": "Sucre, sirop de glucose, cacahuètes, lait écrémé en poudre, beurre de cacao, pâte de cacao, lactose, huile de tournesol, beurre concentré (lait), petit-lait en poudre, matière grasse de palme, sel,  : (lécithine de soja), blanc d’œuf en poudre, huile de noix de coco, protéine de lait hydrolysée, extrait naturel de vanille.",
        "labels_debug_tags": [],
        "labels_prev_tags": [],
        "ingredients_text_de": "Zucker, Glukosesirup, _Erdnüsse_, _Magermilchpulver_, Kakaobutter, Kakaomasse, Sonnenblumenöl, _Milchzucker_, Butterreinfett (aus _Milch_), Süßmolkenpulver (aus _Milch_), Palmfett, Salz, Emulgator (_Sojalecithin_), _Hühnerei-Trockeneiweiß_, _Milcheiweiß_",
        "checkers_tags": [],
        "no_nutrition_data": null,
        "quantity": "50 g",
        "ingredients_text_fr": "Sucre, sirop de glucose, cacahuètes, lait écrémé en poudre, beurre de cacao, pâte de cacao, lactose, huile de tournesol, beurre concentré (lait), petit-lait en poudre, matière grasse de palme, sel, émulsifiant (lécithine de soja), blanc d’œuf en poudre, huile de noix de coco, protéine de lait hydrolysée, extrait naturel de vanille.",
        "ingredients_from_palm_oil_n": 1,
        "pnns_groups_2": "Sweets",
        "serving_size": "50 g",
        "editors": ["teolemon", "gyrostat", "kvliegen", "mathias", "tacite", "securita", "scanbot"],
        "new_additives_n": 0,
        "nutrition_score_warning_no_fiber": 1,
        "ingredients": [{
            "rank": 1,
            "text": "Sucre",
            "id": "sucre"
        }, {
            "rank": 2,
            "text": "sirop de glucose",
            "id": "sirop-de-glucose"
        }, {
            "rank": 3,
            "text": "cacahuètes",
            "id": "cacahuetes"
        }, {
            "rank": 4,
            "text": "lait écrémé en poudre",
            "id": "lait-ecreme-en-poudre"
        }, {
            "rank": 5,
            "text": "beurre de cacao",
            "id": "beurre-de-cacao"
        }, {
            "rank": 6,
            "id": "pate-de-cacao",
            "text": "pâte de cacao"
        }, {
            "id": "lactose",
            "text": "lactose",
            "rank": 7
        }, {
            "rank": 8,
            "id": "huile-de-tournesol",
            "text": "huile de tournesol"
        }, {
            "text": "beurre concentré",
            "id": "beurre-concentre",
            "rank": 9
        }, {
            "text": "lait",
            "id": "lait",
            "rank": 10
        }, {
            "rank": 11,
            "text": "petit-lait en poudre",
            "id": "petit-lait-en-poudre"
        }, {
            "rank": 12,
            "id": "matiere-grasse-de-palme",
            "text": "matière grasse de palme"
        }, {
            "rank": 13,
            "text": "sel",
            "id": "sel"
        }, {
            "rank": 14,
            "text": "émulsifiant",
            "id": "emulsifiant"
        }, {
            "id": "lecithine-de-soja",
            "text": "lécithine de soja",
            "rank": 15
        }, {
            "rank": 16,
            "text": "blanc d’œuf en poudre",
            "id": "blanc-d-oeuf-en-poudre"
        }, {
            "rank": 17,
            "id": "huile-de-noix-de-coco",
            "text": "huile de noix de coco"
        }, {
            "id": "proteine-de-lait-hydrolysee",
            "text": "protéine de lait hydrolysée",
            "rank": 18
        }, {
            "id": "extrait-naturel-de-vanille",
            "text": "extrait naturel de vanille.",
            "rank": 19
        }],
        "expiration_date": "",
        "additives_prev_n": 1,
        "labels": "Grüner Punkt",
        "scans_n": 7,
        "image_small_url": "http://static.openfoodfacts.org/images/products/500/015/946/1122/front_fr.19.200.jpg",
        "image_front_thumb_url": "http://static.openfoodfacts.org/images/products/500/015/946/1122/front_fr.19.100.jpg",
        "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-completed, en:expiration-date-to-be-completed, en:characteristics-completed, en:categories-completed, en:brands-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
        "cities_tags": [],
        "manufacturing_places": "",
        "debug_param_sorted_langs": ["fr", "de"],
        "languages_codes": {
            "de": 6,
            "fr": 5
        },
        "labels_prev_hierarchy": [],
        "origins_tags": [],
        "additives_old_n": 1,
        "ingredients_text_with_allergens": "Sucre, sirop de glucose, cacahuètes, lait écrémé en poudre, beurre de cacao, pâte de cacao, lactose, huile de tournesol, beurre concentré (lait), petit-lait en poudre, matière grasse de palme, sel, émulsifiant (lécithine de soja), blanc d’œuf en poudre, huile de noix de coco, protéine de lait hydrolysée, extrait naturel de vanille.",
        "entry_dates_tags": ["2014-01-08", "2014-01", "2014"],
        "ingredients_that_may_be_from_palm_oil_tags": [],
        "_id": "5000159461122",
        "emb_codes_20141016": "",
        "last_modified_by": null
    },
    "code": "5000159461122",
    "status": 1,
    "status_verbose": "product found"
}