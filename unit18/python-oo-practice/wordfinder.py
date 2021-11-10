"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    """
    A class that reads in a list of words and returns a random word
    """
    def __init__(self, words_path):
        self.text = ''
        with open(words_path) as f:
            self.text = f.read()
        self.words = self.text.split("\n")

    def print_words_len(self):
        print(f"{len(self.words)} words read")
        
    def random(self):
        rand_index = random.randrange(0, len(self.words))
        return self.words[rand_index]


class SpecialWordFinder(WordFinder):
    '''A subclass of wordfinder that can parse txt files with python comments and blank lines'''
    def __init__(self, words_path):
        super().__init__(words_path)

        # filter out comments and blank lines
        def isLineIgnored(value):
            if value.find('#') >= 0 or len(value) == 0:
                return False
            else:
                return True
        
        filtered_words = filter(isLineIgnored, self.words)
        self.words = [x for x in filtered_words]

# wf = WordFinder('words.txt')
# print(wf.random())
# print(wf.random())
# print(wf.random())

swf = SpecialWordFinder('specialwords.txt')
print(swf.random())
print(swf.random())
print(swf.words)

