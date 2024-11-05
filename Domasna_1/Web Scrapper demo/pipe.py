import time

import psycopg2

import filter_one
import filter_two
import filter_two_v2


def check_table(table_name, conn):

    exists_query = f"""
        SELECT EXISTS (
            SELECT 1 
            FROM pg_catalog.pg_tables 
            WHERE schemaname = 'public' 
            AND tablename = '{table_name}'
        );
    """
    cur = conn.cursor()
    cur.execute(exists_query)
    return cur.fetchone()[0]

if __name__ == '__main__':
    conn = psycopg2.connect(
        dbname='postgres',
        user='postgres',
        password='1234',
        host='localhost',
        port='5432'
    )
    start_time = time.time()
    tickers = []

    if not check_table('stocks', conn) or not check_table('stockdetails', conn):
        print('Creating stocks table and fetching tickers')
        tickers = filter_one.init()
        print('Creating stockdetails table and fetching historic data for each ticker')
        filter_two.init(tickers, conn)

    #while stockdetails is null beskonecen loop za da cekat tretiov filter
    #da se napolnit bazava pred da prodolzit
    end_time = time.time()
    print(f'Time taken from start to finish: {end_time - start_time:.2f}')
    print(f'Script executed..')