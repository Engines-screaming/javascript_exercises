"""Word Finder: finds random words from a dictionary."""


class WordFinder:
    """
    >>> finder = WordFinder('words.txt')
    235886
    """
    def __init__(self, words_path):
        self.text = ''
        with open(words_path) as f:
            self.text = f.read()
        self.words = self.text.split("\n")
        print(f"{len(self.words)}")