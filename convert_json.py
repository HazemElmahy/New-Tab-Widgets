import json

f = open('wanikani_kanji.json')

data = json.load(f)
    # "-": {
    #     "a": {
    #         "Seion": {
    #             "Katakana": "ア",
    #             "Hiragana": "あ",
    #             "Romaji": "a"
    #         }
    #     },

    # "一": {
    #     "strokes": 1,
    #     "grade": 1,
    #     "freq": 2,
    #     "jlpt_old": 4,
    #     "jlpt_new": 5,
    #     "meanings": ["One","One Radical (no.1)"],
    #     "readings_on": ["いち","いつ"],
    #     "readings_kun": ["ひと-","ひと.つ"],
    #     "wk_level": 1,
    #     "wk_meanings": ["One"],
    #     "wk_readings_on": ["いち","いつ"],
    #     "wk_readings_kun": ["!ひと"],
    #     "wk_radicals": ["Ground"]
    # },

# three_layers = list(data.values())
# two_layer_lists = [list(i.values()) for i in three_layers]
# two_layers = [i for sublist in two_layer_lists for i in sublist]
# one_layer_lists = [list(i.values()) for i in two_layers]
# one_layer = [i for sublist in one_layer_lists for i in sublist]

# kana_dict = {}

# for k in one_layer:
#     kana_dict[k['Katakana']] =  k['Romaji']
#     kana_dict[k['Hiragana']] =  k['Romaji']
# kanji = list(data.keys())
# # data = list(data.values()['readings_on'])

# reading = [i['readings_on'] for i in list(data.values())]
# # two_layer_lists = [{k: [o, m]} for k in kanji for o in data]
# # two_layers = [i for sublist in two_layer_lists for i in sublist]
# for i


# print(len(meaning))

