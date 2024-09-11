import random


# 10回連続 True が出るかどうかを判定する10回連続 True が出るか判定
def is_10_true(seed):
    random.seed(seed)
    return all(random.choice([True, False]) for _ in range(10))


while True:
    seed = random.randint(0, 1000000)
    if is_10_true(seed):
        print(seed)
        break

random.seed(196528)
for _ in range(13):
    print(random.choice([True, False]))
