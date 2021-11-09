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
        print(f"{len(self.words)} words read")

    def random(self):
        rand_index = random.randrange(0, len(self.words))
        return self.words[rand_index]


wf = WordFinder('words.txt')
print(wf.random())
print(wf.random())
print(wf.random())
