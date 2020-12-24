#include <iostream>
#include <map>

using namespace std;

main() {
    map<string, int> m;
    m.insert(map<string, int>::value_type("a", 1));
    m.insert(pair<string, int>("b", 0));
    m["c"] = 2;
    m["d"];
    
    map<string, int>::iterator it;

    for (it = m.begin(); it != m.end(); ++it) {
        cout << it->first << " => " << it->second << endl;
    }
}
