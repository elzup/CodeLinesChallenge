# サイコロ6個ふった合計値の分布

# output like:
# 6: 1.0%
# 7: 6.0%
# 8: 15.0%

from itertools import product
from collections import Counter


def dice_total():
    dice = range(1, 7)
    for roll in product(dice, repeat=6):
        yield sum(roll)


total = Counter(dice_total())
for key in sorted(total.keys()):
    print(f"{key}: {total[key] / 6**6 * 100:.3f}%")
