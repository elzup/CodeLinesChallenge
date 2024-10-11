from mpmath import mp

mp.dps = 100  # 計算精度をn桁に設定

z3a = 13643128
z3b = 351915621

print(mp.zeta(3))
print((z3a / z3b) * mp.pi**3)
print(mp.zeta(3) - (z3a / z3b) * mp.pi**3)
print(mp.zeta(3) / mp.pi**3)
print(mp.zeta(3) * mp.pi**3)

print()

k = 3
# アペリー定数の近似値
zetav = mp.zeta(k)
print(zetav)

# アペリー定数に基づく π^3 / aperi の計算
ap = zetav / mp.pi**k


# 関数：整数に近いかどうかを判定
def is_close(v, tolerance=mp.mpf("1e-6")):
    return mp.fabs(v % 1) < tolerance


a = mp.mpf(1)
while True:
    b = a * ap
    if is_close(b):
        print({"a": a, "b": b})
        print(f"{b} / {a} * π^{k} = {ap}")
        break
    a += 1
