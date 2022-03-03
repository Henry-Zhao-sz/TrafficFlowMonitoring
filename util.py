import time
import pymysql

def get_conn():
    # 建立连接
    conn = pymysql.connect(host="localhost",port=3306, user="root", password="root", db="aviation", charset="utf8")
    # c创建游标A
    cursor = conn.cursor()
    return conn, cursor

def close_conn(conn, cursor):
    if cursor:
        cursor.close()
    if conn:
        conn.close()

def query(sql,*args):
    """root

    :param sql:
    :param args:
    :return:
    """
    conn,cursor = get_conn()
    cursor.execute(sql,args)
    res = cursor.fetchall()
    close_conn(conn,cursor)
    return res


def get_l1_data():
    sql = "select value from passtrans where type='国内航线'"
    res = query(sql)
    data = []
    for item in res:
        data.append(item[0])
    return data

def get_l2_data():
    sql = "select value from passturnover where type='国内航线'"
    res = query(sql)
    data = []
    for item in res:
        data.append(item[0])
    return data

def get_r1_data():
    sql = "select value from cargotrans where type='国内航线'"
    res = query(sql)
    data = []
    for item in res:
        data.append(item[0])
    return data

def get_r2_data():
    sql = "select value from cargoturnover where type='国内航线'"
    res = query(sql)
    data = []
    for item in res:
        data.append(item[0])
    return data

def get_l21_data():
    sql = "select value from passtrans where type='国际航线'"
    res = query(sql)
    data = []
    for item in res:
        data.append(item[0])
    return data

def get_l22_data():
    sql = "select value from passturnover where type='国际航线'"
    res = query(sql)
    data = []
    for item in res:
        data.append(item[0])
    return data

def get_r21_data():
    sql = "select value from cargotrans where type='国际航线'"
    res = query(sql)
    data = []
    for item in res:
        data.append(item[0])
    return data

def get_r22_data():
    sql = "select value from cargoturnover where type='国际航线'"
    res = query(sql)
    data = []
    for item in res:
        data.append(item[0])
    return data

def get_l31_data():
    list = ["'东部地区'","'中部地区'","'西部地区'","'东北地区'"]
    data=[]
    for item in list:
        sql = "select passThrough from passengerthroughout where area="+item

        res = query(sql)
        temp = []
        for i in res:
            temp.append(i[0])
        data.append(temp)
    return data

def get_l32_data():
    list = [1,2,3,4,5,6,7,8,9,10,11,12]
    data=[]
    for item in list:
        sql = "select passThrough from passengerthroughout where month="+str(item)

        res = query(sql)
        temp = []
        for i in res:
            temp.append(i[0])
        data.append(temp)
    return data

def get_c31_data():
    list = ["'东部地区'","'中部地区'","'西部地区'","'东北地区'"]
    data=[]
    for item in list:
        sql = "select cargoThrough from cargothroughout where area="+item

        res = query(sql)
        temp = []
        for i in res:
            temp.append(i[0])
        data.append(temp)
    return data

def get_c32_data():
    list = [1,2,3,4,5,6,7,8,9,10,11,12]
    data=[]
    for item in list:
        sql = "select cargoThrough from cargothroughout where month="+str(item)

        res = query(sql)
        temp = []
        for i in res:
            temp.append(i[0])
        data.append(temp)
    return data

def get_r31_data():
    list = ["'东部地区'","'中部地区'","'西部地区'","'东北地区'"]
    data=[]
    for item in list:
        sql = "select value from sortie where area="+item

        res = query(sql)
        temp = []
        for i in res:
            temp.append(i[0])
        data.append(temp)
    return data

def get_r32_data():
    list = [1,2,3,4,5,6,7,8,9,10,11,12]
    data=[]
    for item in list:
        sql = "select value from sortie where month="+str(item)
        res = query(sql)
        temp = []
        for i in res:
            temp.append(i[0])
        data.append(temp)
    return data


if __name__ == "__main__":
    # for str in ["'东部地区'","'中部地区'","'西部地区'","'东北地区'"]:
    #     data = get_l33_data(str)
    #     print(data)
    # for i in range(1,13):
    #     data=get_l33month_data(str(i))
    #     print(data)
    res = get_c32_data()
    print(res)
