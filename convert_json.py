import json

f = open('kana.json')

data = json.load(f)
    # "-": {
    #     "a": {
    #         "Seion": {
    #             "Katakana": "ア",
    #             "Hiragana": "あ",
    #             "Romaji": "a"
    #         }
    #     },

three_layers = list(data.values())
two_layer_lists = [list(i.values()) for i in three_layers]
two_layers = [i for sublist in two_layer_lists for i in sublist]
one_layer_lists = [list(i.values()) for i in two_layers]
one_layer = [i for sublist in one_layer_lists for i in sublist]

kana_dict = {}

for k in one_layer:
    kana_dict[k['Katakana']] =  k['Romaji']
    kana_dict[k['Hiragana']] =  k['Romaji']

print(kana_dict)

